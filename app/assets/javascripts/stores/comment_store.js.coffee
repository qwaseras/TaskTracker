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
        @comments.unshift(response)
        @emitChange()

  onUpdateComment: (comment)->
    console.log(comment.id)

    $.ajax
      type: 'PATCH'
      url: "/comments/#{comment.id}"
      data:
        comment:
          title: comment.title
      success: (response)=>
          console.log(response)
        @emitChange()


  getComments: ()->
    @getState().comments

window.CommentStore = alt.createStore(CommentStore)
