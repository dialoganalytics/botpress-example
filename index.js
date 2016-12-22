module.exports = function(bp) {
  bp.middlewares.load()

  bp.hear({ text: /text/i, type: 'message' }, (event, next) => {
    bp.messenger.sendText(event.user.id, 'Hello, human!')
  })

  bp.hear({ text: /attachment/i, type: 'message' }, (event, next) => {
    bp.messenger.sendAttachment(event.user.id, 'image', 'https://dialoganalytics.com/images/og-image.png')
  })

  bp.hear({ text: /button template/i, type: 'message' }, (event, next) => {
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
            url: "https://dialoganalytics.com"
          },
          buttons:[
            {
              type: "web_url",
              url: "https://docs.dialoganalytics.com",
              title: "Documentation"
            },
            {
              type: "web_url",
              url: "https://github.com/dialoganalytics",
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
              url: "https://dialoganalytics.com/messenger"
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
              url: "https://dialoganalytics.com/smooch"
            }
          ]
        }
      ],
      buttons: [
        {
          type: "web_url",
          url: "https://dialoganalytics.com",
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
