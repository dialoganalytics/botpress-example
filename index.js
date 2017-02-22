module.exports = function(bp) {
  bp.middlewares.load()

  bp.hear({ text: /text/i, type: 'message' }, (event, next) => {
    bp.messenger.sendText(event.user.id, 'Hello, human!')
  })

  bp.hear({ text: /attachment/i, type: 'message' }, (event, next) => {
    bp.messenger.sendAttachment(event.user.id, 'image', 'https://dialoganalytics.com/images/og-image.png')
  })

  bp.hear({ text: /quick reply/i, type: 'message' }, (event, next) => {
    payload = {
      quick_replies: [
        {
          content_type: 'text',
          title: 'Amazon Alexa',
          payload: 'ALEXA'
        },
        {
          content_type: 'text',
          title: 'Google Actions',
          payload: 'GOOGLE'
        },
        {
          content_type: 'text',
          title: 'DingDong',
          payload: 'DINGDONG'
        }
      ],
      typing: true
    }

    bp.messenger.sendText(event.user.id, 'Which one do you own?', payload)
  })

  bp.hear({ text: /url button/i, type: 'message' }, (event, next) => {
    payload = {
      template_type: "button",
      text: "Check out our documentation!",
      buttons: [
        {
          type: "web_url",
          url: bp.dialog.link("https://docs.dialoganalytics.com", event.user.id),
          title: "URL button"
        }
      ]
    }

    bp.messenger.sendTemplate(event.user.id, payload, { typing: 2000 })
  })

  bp.hear({ text: /postback button/i, type: 'message' }, (event, next) => {
    payload = {
      template_type: "button",
      text: "Do this!",
      buttons: [
        {
          type: "postback",
          title: "Postback button",
          payload: "DEVELOPER_DEFINED_PAYLOAD"
        }
      ]
    }

    bp.messenger.sendTemplate(event.user.id, payload, { typing: 2000 })
  })

  bp.hear({ text: /call button/i, type: 'message' }, (event, next) => {
    payload = {
      template_type: "button",
      text: "Reach out to the Dialog team",
      buttons: [
        {
          "type":"phone_number",
          "title":"Call us",
          "payload":"+15105551234"
       }
      ]
    }

    bp.messenger.sendTemplate(event.user.id, payload, { typing: 2000 })
  })

  bp.hear({ text: /share button/i, type: 'message' }, (event, next) => {
    payload = {
      template_type: "generic",
      elements:[
        {
          title: "Dialog",
          subtitle: "Conversational analytics",
          default_action: {
            type: "web_url",
            url: bp.dialog.link("https://dialoganalytics.com", event.user.id)
          },
          buttons:[
            {
              type: "element_share"
            }
          ]
        }
      ]
    }

    bp.messenger.sendTemplate(event.user.id, payload, { typing: 2000 })
  })

  bp.hear({ text: /location/i, type: 'message' }, (event, next) => {
    payload = {
      quick_replies: [
        {
          title: 'location',
          content_type: 'location'
        }
      ],
      typing: true
    }

    bp.messenger.sendText(event.user.id, 'Where do you live?', payload)
  })

  bp.hear({ text: /button template/i, type: 'message' }, (event, next) => {
    payload = {
      template_type: "button",
      text: "Check out our documentation!",
      buttons: [
        {
          type: "web_url",
          url: bp.dialog.link("https://docs.dialoganalytics.com", event.user.id),
          title: "URL button"
        },
        {
          type: "postback",
          title: "Postback button",
          payload: "DEVELOPER_DEFINED_PAYLOAD"
        },
        {
          "type":"phone_number",
          "title":"Call me maybe",
          "payload":"+15105551234"
       }
     ]
    }

    bp.messenger.sendTemplate(event.user.id, payload, { typing: 2000 })
  })

  bp.hear({ text: /generic template/i, type: 'message' }, (event, next) => {
    payload = {
      template_type: "generic",
      elements:[
        {
          title: "This is Dialog",
          image_url: "https://dialoganalytics.com/images/og-image.png",
          subtitle: "Conversational analytics",
          default_action: {
            type: "web_url",
            url: bp.dialog.link("https://dialoganalytics.com", event.user.id)
          },
          buttons:[
            {
              type: "web_url",
              url: bp.dialog.link("https://docs.dialoganalytics.com", event.user.id),
              title: "Documentation"
            },
            {
              type: "web_url",
              url: bp.dialog.link("https://github.com/dialoganalytics", event.user.id),
              title: "Dialog on Github"
            }
          ]
        }
      ]
    }

    bp.messenger.sendTemplate(event.user.id, payload, { typing: 2000 })
  })

  bp.hear({ text: /list template/i, type: 'message' }, (event, next) => {
    payload = {
      template_type: "list",
      elements: [
        {
          title: "Messenger",
          image_url: "https://dialoganalytics.com/messenger",
          subtitle: "Dialog for Messenger applications",
          buttons: [
            {
              title: "Learn more",
              type: "web_url",
              url: bp.dialog.link("https://dialoganalytics.com/messenger", event.user.id)
            }
          ]
        },
        {
          title: "Smooch",
          image_url: "https://dialoganalytics.com/smooch",
          subtitle: "Dialog for Smooch applications",
          buttons: [
            {
              title: "Learn more",
              type: "web_url",
              url: bp.dialog.link("https://dialoganalytics.com/smooch", event.user.id)
            }
          ]
        }
      ],
      buttons: [
        {
          type: "web_url",
          url: bp.dialog.link("https://dialoganalytics.com", event.user.id),
          title: "Learn More"
        }
      ]
    }

    bp.messenger.sendTemplate(event.user.id, payload, { typing: 2000 })
  })

  bp.hear({ text: /receipt template/i, type: 'message' }, (event, next) => {
    payload = {
      template_type: "receipt",
      recipient_name: "Philippe Dionne",
      order_number: "1234567890",
      currency: "USD",
      payment_method: "Visa 1234",
      order_url: "http://example.com/orders/1",
      timestamp: "1428444852",
      elements:[
        {
          title: "White T-Shirt",
          subtitle: "100% Cotton",
          quantity: 2,
          price: 25,
          currency: "USD",
          image_url: "http://example.com/products/1.jpg"
        }
      ],
      address:{
        street_1: "226 rue Saint-Joseph Est",
        street_2: "",
        city: "Québec",
        postal_code: "G1K 3A9",
        state: "QC",
        country: "CA"
      },
      summary:{
        subtotal: 35.00,
        shipping_cost: 10,
        total_tax: 5,
        total_cost: 40
      },
      adjustments:[
        {
          name: "$10 Off Coupon",
          amount: 10
        }
      ]
    }

    bp.messenger.sendTemplate(event.user.id, payload, { typing: 2000 })
  })
}
