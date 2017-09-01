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
    $.ajax
      type: 'POST'
      url: '/comments'
      data:
        comment: comment
      success: (response)=>
        @comments.push(response)
        console.log(@comments)
        @emitChange()

  onUpdateComment: (comment)->
    $.ajax
      type: 'PATCH'
      url: "/comments/#{comment.id}"
      data:
        comment:
          title: comment.title
      success: (response) =>
        commentIndex = @comments.findIndex((obj) ->
          return obj.id == response.id
        )
        @comments[commentIndex] = response
        @emitChange()

  onDeleteComment: (id)->
    $.ajax
      type: 'DELETE'
      url: "/comments/#{id}"
      success: () =>
        commentIndex = @comments.findIndex((obj) ->
          return obj.id == id
        )
        @comments.splice(commentIndex, 1)
        @emitChange()


  getComments: ()->
    @getState().comments

window.CommentStore = alt.createStore(CommentStore)
