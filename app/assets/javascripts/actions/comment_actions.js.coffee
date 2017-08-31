class CommentActions
  constructor: ->
    @generateActions(
      'initData',
      'submitComment'
      'updateComment'
    )

window.CommentActions = alt.createActions(CommentActions)