const databasePublicSettings = {
    logoUrl
    siteImage
    locale
    intercomAppId
    // logRocket.sampleDensity
    // logRocket.apiKey
    cloudinary
      "cloudName"
      "uploadPresetGridImage"
      "uploadPresetBanner"
      "uploadPresetSocialPreview"
      "uploadPresetEventImage"
    },
    googleTagManager
      "apiKey"
    },
    reCaptcha
      "apiKey"
    },
    algolia
      searchKey
      appId
      indexPrefix
      autoSyncIndexes
    },
    googleMaps
      apiKey
    },
    mapbox
      apiKey
    },
    forum
      // numberOfDays
      // numberOfWeeks
      // numberOfMonths
      // numberOfYears
      postInterval
      maxPostsPerDay
    },
    useExperimentalTagStyle
    ckEditor
      webSocketUrl
      uploadUrl
    },
    hideUnreviewedAuthorComments
    legacyRouteAcronym
    timeDecayFactor
    maxDocumentsPerRequest
    commentInterval
    defaultVisibilityTags
      {
        tagId
        tagName
        filterMode
      }
    ],
    showSmallpox
    showHandbookBanner
    showTagProgressBar
    showEventBanner
    eventBannerMobileImage
    eventBannerDesktopImage
    eventBannerLink
    petrov
      beforeTime
      afterTime
    },
    amaTagId
    openThreadTagId
    startHerePostId
    // debuggers
    elicitSourceId
    elicitSourceURL
    annualReview
      start
      nominationPhaseEnd
      reviewPhaseEnd
      end
      announcementPostPath
    },
  }
  
  const databaseServerSettings = {
    akismet
      apiKey
      url
    },
    analytics
      connectionString
    },
    // ipBansEnabled
    reCaptcha
      secret
    },
    ckEditor
      environmentId
      secretKey
    },
    algolia
      adminKey
    },
    expressSessionSecret
    oAuth
      // For testing LW code - we don't use them
      google
        clientId
        secret
      },
      github
        clientId
        secret
      },
      auth0
        appId
        secret
        domain
      },
    },
    defaultEmail
    enableDevelopmentEmails
    // Sandbox server
    mailUrl
    forwardedWhitelist
    intercomToken
    googleMaps
      serverApiKey
    },
    // googleSheets.apiKey
    // mozillaHubsAPIKey
    // mozillaHubsUserId
    // robotsTxt
    // oAuth
    // apolloEngine.apiKey
    elicitAPIKey
  }
  
  // db.databasemetadata.insert({name: 'publicSettings', value: databasePublicSettings})
  // db.databasemetadata.insert({name: 'serverSettings', value: databaseServerSettings})
  
  db.databasemetadata.update({name: 'publicSettings'}, {$set: {value: databasePublicSettings}})
  db.databasemetadata.update({name: 'serverSettings'}, {$set: {value: databaseServerSettings}})
  db.databasemetadata.deleteOne({name: 'databaseId'})
  