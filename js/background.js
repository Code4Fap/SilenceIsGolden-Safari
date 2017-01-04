var unSeenFilters = [
  {
    "trigger": {
        "url-filter": "https?:\/\/(www.)?(m.)?facebook.*change_read_status.*",
        "if-domain": ["*facebook.com", "*messenger.com"]
    },
    "action": {
        "type": "block"
    }
  },
  {
    "trigger": {
        "url-filter": "https?:\/\/(www.)?(m.)?messenger.*change_read_status.*",
        "if-domain": ["*facebook.com", "*messenger.com"]
    },
    "action": {
        "type": "block"
    }
  },
  {
    "trigger": {
        "url-filter": "https?:\/\/(www.)?(m.)?facebook.*mark_seen.*",
        "if-domain": ["*facebook.com", "*messenger.com"]
    },
    "action": {
        "type": "block"
    }
  },
  {
    "trigger": {
        "url-filter": "https?:\/\/(www.)?(m.)?messenger.*mark_seen.*",
        "if-domain": ["*facebook.com", "*messenger.com"]
    },
    "action": {
        "type": "block"
    }
  }
];

var typingFilters = [
  {
    "trigger": {
        "url-filter": "https?:\/\/(www.)?(m.)?facebook.*typ.php.*",
        "if-domain": ["*facebook.com", "*messenger.com"]
    },
    "action": {
        "type": "block"
    }
  },
  {
    "trigger": {
        "url-filter": "https?:\/\/(www.)?(m.)?messenger.*typ.php.*",
        "if-domain": ["*facebook.com", "*messenger.com"]
    },
    "action": {
        "type": "block"
    }
  }
];

var invisibleFilters = [
 {
    "trigger": {
        "url-filter": "https?:\/\/(.-)*edge-chat.facebook.com\/.*",
        "if-domain": ["*facebook.com", "*messenger.com"]
    },
    "action": {
        "type": "block"
    }
  },
  {
    "trigger": {
        "url-filter": "https?:\/\/(.-)*edge-chat.messenger.com\/.*",
        "if-domain": ["*facebook.com", "*messenger.com"]
    },
    "action": {
        "type": "block"
    }
  },
  {
    "trigger": {
        "url-filter": "https?:\/\/www.facebook.com\/ajax\/chat.*",
        "if-domain": ["*facebook.com", "*messenger.com"]
    },
    "action": {
        "type": "block"
    }
  },
  {
    "trigger": {
        "url-filter": "https?:\/\/www.messenger.com\/ajax\/chat.*",
        "if-domain": ["*facebook.com", "*messenger.com"]
    },
    "action": {
        "type": "block"
    }
  },
  {
    "trigger": {
        "url-filter": "https?:\/\/www.facebook.com\/chat.*",
        "if-domain": ["*facebook.com", "*messenger.com"]
    },
    "action": {
        "type": "block"
    }
  },
  {
    "trigger": {
        "url-filter": "https?:\/\/www.messenger.com\/chat.*",
        "if-domain": ["*facebook.com", "*messenger.com"]
    },
    "action": {
        "type": "block"
    }
  },
  {
    "trigger": {
        "url-filter": "https?:\/\/www.facebook.com\/ajax\/presence.*",
        "if-domain": ["*facebook.com", "*messenger.com"]
    },
    "action": {
        "type": "block"
    }
  },
  {
    "trigger": {
        "url-filter": "https?:\/\/www.messenger.com\/ajax\/presence.*",
        "if-domain": ["*facebook.com", "*messenger.com"]
    },
    "action": {
        "type": "block"
    }
  }
];

var isInvisible = safari.extension.settings.is_invisible;
var isUnseen = safari.extension.settings.is_unseen;
var isTyping = safari.extension.settings.is_typing;
var settings = [];

if (isInvisible) {
  settings = settings.concat(invisibleFilters);
}

if (isUnseen) {
  settings = settings.concat(unSeenFilters);
}

if (isTyping) {
  settings = settings.concat(typingFilters);
}

safari.extension.setContentBlocker(contentBlockingRules);
