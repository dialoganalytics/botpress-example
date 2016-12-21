module.exports = function(bp) {
  bp.middlewares.load()

  bp.hear({ text: /text/i, type: 'message' }, (event, next) => {
    bp.messenger.sendText(event.user.id, 'Hello, human!')
  })

  bp.hear({ text: /attachment/i, type: 'message' }, (event, next) => {
    bp.messenger.sendAttachment(event.user.id, 'image', 'https://dialoganalytics.com/images/og-image.png')
  })

  bp.hear({ text: /template/i, type: 'message' }, (event, next) => {
    payload = {
      template_type: "button",
      text: "Check out our documentation!",
      buttons: [
        {
          type: "web_url",
          url: "https://docs.dialoganalytics.com",
          title: "Documentation"
        }
      ]
    }

    bp.messenger.sendTemplate(event.user.id, payload, { typing: 2000 })
  })
}
