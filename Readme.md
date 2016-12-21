# Botpress Example Application

An example [Botpress](https://github.com/botpress/botpress) application integrated with [Dialog Analytics](https://dialoganalytics.com/).

## Installation

Clone this repository and install dependencies:

```bash
$ npm install
```

Start the application and head over to [localhost:3000](http://localhost:3000):

```bash
$ npm start
```

### Dialog

To track messages with Dialog, you need an API token which is available in your [personal account](https://app.dialoganalytics.com/users/edit), and a bot ID. Follow [these instructions](https://github.com/dialoganalytics/botpress-dialog#get-started) to configure the dialog module.

### Messenger

This example application uses the Facebook Messenger messaging platform. Follow these [instructions](https://github.com/botpress/botpress-messenger) to configure the messenger module.


## Usage

Once the modules are installed and configured, every incoming and outgoing messages will be tracked by Dialog.
