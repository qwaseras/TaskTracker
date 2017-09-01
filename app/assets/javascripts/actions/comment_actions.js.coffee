class CommentActions
  constructor: ->
    @generateActions(
      'initData',
      'submitComment'
      'updateComment'
      'deleteComment'
    )

window.CommentActions = alt.createActions(CommentActions)
