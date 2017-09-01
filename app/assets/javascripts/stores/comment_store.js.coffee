class CommentStore
  @displayName: 'CommentStore'

  constructor: ->
    @bindActions(CommentActions)
    @comments = []

    @exportPublicMethods(
      {
        getComments: @getComments
      }
    )

  onInitData: (props)->
    @comments = props.comments

  onSubmitComment: (comment)->
    # $.ajax
    #   type: 'POST'
    #   url: '/comments'
    #   data:
    #     comment: comment
    #   success: (response)=>
    #     @comments.push(response)
    #     console.log(@comments)
    #     @emitChange()
    axios.post "/comments", {comment: comment}
    .then (response) =>
      console.log(response.data)
      if response.data != ""
        @comments.push(response.data)
        @emitChange()

  onUpdateComment: (comment)->
    axios.patch "/comments/#{comment.id}", {comment: title: comment.title}
    .then (response) =>
      commentIndex = @comments.findIndex((obj) ->
        return obj.id == response.data.id
      )
      @comments[commentIndex] = response.data
      @emitChange()


  onDeleteComment: (id)->
    axios.delete "/comments/#{id}"
    .then (response) =>
      commentIndex = @comments.findIndex((obj) ->
        return obj.id == id
      )
      @comments.splice(commentIndex, 1)
      @emitChange()



  getComments: ()->
    @getState().comments

window.CommentStore = alt.createStore(CommentStore)
