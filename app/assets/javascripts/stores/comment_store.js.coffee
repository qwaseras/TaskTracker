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

  onUpdateComment: (comment, comment_id)->
    $.ajax
      type: 'PATCH'
      url: "/comments/1"
      data:
        comment: comment
      success: (response)=>
        _.find(@comments, { id: response.id} ).title = comment.title
        @emitChange()


  getComments: ()->
    @getState().comments

window.CommentStore = alt.createStore(CommentStore)