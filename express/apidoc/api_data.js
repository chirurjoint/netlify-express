define({ "api": [
  {
    "type": "post",
    "url": "/photos",
    "title": "Création d'une photo",
    "name": "CreatePhoto",
    "group": "Photos",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "bearer",
            "optional": false,
            "field": "token",
            "description": "<p>token obtenu lors de l'authentification</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "BODY": [
          {
            "group": "BODY",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Url de la photo</p>"
          },
          {
            "group": "BODY",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>Description de la photo</p>"
          },
          {
            "group": "BODY",
            "type": "Object",
            "optional": false,
            "field": "position",
            "description": "<p>Position de la photo (position : {lat, lng} )</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Photo",
            "optional": false,
            "field": "photo",
            "description": "<p>Information de la nouvelle photo</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Authentification impossible</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Erreur interne</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Photos"
  },
  {
    "type": "delete",
    "url": "/photos/:id",
    "title": "Supprimer une photo",
    "name": "DeletePhoto",
    "group": "Photos",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "bearer",
            "optional": false,
            "field": "token",
            "description": "<p>token obtenu lors de l'authentification</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URI": [
          {
            "group": "URI",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la photo à supprimer</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Photo",
            "optional": false,
            "field": "photo",
            "description": "<p>Information de la photo supprimée et sa date de suppression</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>L'id ne correspond pas à une photo existante</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Authentification impossible ou la photo n'appartient pas à l'utilisateur</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Erreur interne</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Photos"
  },
  {
    "type": "put",
    "url": "/serie/:id",
    "title": "Modifier une photo",
    "name": "UpdatePhoto",
    "group": "Photos",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "bearer",
            "optional": false,
            "field": "token",
            "description": "<p>token obtenu lors de l'authentification</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URI": [
          {
            "group": "URI",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la photo à mettre à jour</p>"
          }
        ],
        "BODY": [
          {
            "group": "BODY",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>Description de la photo</p>"
          },
          {
            "group": "BODY",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Url de la photo</p>"
          },
          {
            "group": "BODY",
            "type": "Object",
            "optional": false,
            "field": "position",
            "description": "<p>Position de la photo (position : {lat, lng} )</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Photo",
            "optional": false,
            "field": "serie",
            "description": "<p>Nouvelle informations de la photo</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>L'id ne correspond pas à une photo existante</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Authentification impossible ou la photo n'appartient pas à l'utilisateur</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Erreur interne</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Photos"
  },
  {
    "type": "get",
    "url": "/photos/:id",
    "title": "Photo de l'utilisateur selon un id",
    "name": "getPhoto",
    "group": "Photos",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "bearer",
            "optional": false,
            "field": "token",
            "description": "<p>token de l'utilisateur</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URI": [
          {
            "group": "URI",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>de la photo</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Photo",
            "optional": false,
            "field": "Photo",
            "description": "<p>Photo de l'utilisateur qu'il veut modifier</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>L'utilisateur n'est pas authentifié</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>l'id est incorrect</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Erreur interne</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Photos"
  },
  {
    "type": "get",
    "url": "/photos",
    "title": "Photos de l'utilisateur",
    "name": "getPhotos",
    "group": "Photos",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "bearer",
            "optional": false,
            "field": "token",
            "description": "<p>token de l'utilisateur</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "QUERY": [
          {
            "group": "QUERY",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>valeur pour limité la récupération des photos</p>"
          },
          {
            "group": "QUERY",
            "type": "String",
            "optional": false,
            "field": "offset",
            "description": "<p>valeur pour limité la récupération des photos</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Photos",
            "optional": false,
            "field": "Photos",
            "description": "<p>Photos de l'utilisateur</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>L'utilisateur n'est pas authentifié</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Erreur interne</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Photos"
  },
  {
    "type": "put",
    "url": "/photos/:id",
    "title": "Photo de l'utilisateur selon un id",
    "name": "savePhoto",
    "group": "Photos",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "bearer",
            "optional": false,
            "field": "token",
            "description": "<p>token de l'utilisateur</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URI": [
          {
            "group": "URI",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>de la photo</p>"
          }
        ],
        "BODY": [
          {
            "group": "BODY",
            "type": "Photo",
            "optional": false,
            "field": "Photo",
            "description": "<p>Données de la photo a sauvegarder</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Photo",
            "optional": false,
            "field": "Photo",
            "description": "<p>Photo de l'utilisateur a modifié</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>L'utilisateur n'est pas authentifié</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>l'id est incorrect</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Erreur interne</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Photos"
  },
  {
    "type": "put",
    "url": "/series/:idSerie/photos/:idPhoto",
    "title": "Ajoute une photo dans une série",
    "name": "AddPhotoOnSerie",
    "group": "Series",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "bearer",
            "optional": false,
            "field": "token",
            "description": "<p>token de l'utilisateur</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URI": [
          {
            "group": "URI",
            "type": "UUID",
            "optional": false,
            "field": "idSerie",
            "description": "<p>Id de la série que l'utilisateur veut modifier</p>"
          },
          {
            "group": "URI",
            "type": "UUID",
            "optional": false,
            "field": "idPhoto",
            "description": "<p>Id de la photo que l'utilisateur veut ajouter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Serie",
            "optional": false,
            "field": "Serie",
            "description": "<p>La série modifié</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>L'utilisateur n'est pas authentifié</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>idSerie ou idPhoto absente dans la requête</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>idSerie ou idPhoto est incorrect</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Erreur interne</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Series"
  },
  {
    "type": "post",
    "url": "/series",
    "title": "Création d'une série",
    "name": "CreateSerie",
    "group": "Series",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "bearer",
            "optional": false,
            "field": "token",
            "description": "<p>token obtenu lors de l'authentification</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "BODY": [
          {
            "group": "BODY",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>Nom de la série</p>"
          },
          {
            "group": "BODY",
            "type": "String",
            "optional": false,
            "field": "descr",
            "description": "<p>Description de la série</p>"
          },
          {
            "group": "BODY",
            "type": "String",
            "optional": false,
            "field": "ville",
            "description": "<p>Ville de la série</p>"
          },
          {
            "group": "BODY",
            "type": "Number",
            "optional": false,
            "field": "dist",
            "description": "<p>Valeur de la distance D de calcul des points</p>"
          },
          {
            "group": "BODY",
            "type": "UUID[]",
            "optional": false,
            "field": "photos",
            "description": "<p>Tableau d'id de photos à associer à la série (peut être un talbeau vide)</p>"
          },
          {
            "group": "BODY",
            "type": "Object",
            "optional": false,
            "field": "map",
            "description": "<p>Carte de la série (position easy-vue-leaflet : {lat, lng, zoom} )</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Serie",
            "optional": false,
            "field": "serie",
            "description": "<p>informations de la série créée</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>L'utilisateur n'est pas authentifié</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Les données renseignées sont incorrecte</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Erreur interne</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Series"
  },
  {
    "type": "delete",
    "url": "/series/:idSerie/photos/:idPhoto",
    "title": "Supprime une photo dans une série",
    "name": "DeletePhotoOnSerie",
    "group": "Series",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "bearer",
            "optional": false,
            "field": "token",
            "description": "<p>token de l'utilisateur</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URI": [
          {
            "group": "URI",
            "type": "UUID",
            "optional": false,
            "field": "idSerie",
            "description": "<p>Id de la série que l'utilisateur veut modifier</p>"
          },
          {
            "group": "URI",
            "type": "UUID",
            "optional": false,
            "field": "idPhoto",
            "description": "<p>Id de la photo que l'utilisateur veut supprimer</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Serie",
            "optional": false,
            "field": "Serie",
            "description": "<p>La série modifié</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>L'utilisateur n'est pas authentifié</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>idSerie ou idPhoto absente dans la requête</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>idSerie ou idPhoto est incorrect</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Erreur interne</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Series"
  },
  {
    "type": "delete",
    "url": "/serie/:id",
    "title": "Supprimer une série",
    "name": "DeleteSerei",
    "group": "Series",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "bearer",
            "optional": false,
            "field": "token",
            "description": "<p>token obtenu lors de l'authentification</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URI": [
          {
            "group": "URI",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la série à supprimer</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Serie",
            "optional": false,
            "field": "serie",
            "description": "<p>Information de la série supprimée et sa date de suppression</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>L'id ne correspond pas à une série existante</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Authentification impossible ou la série n'appartient pas à l'utilisateur</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Erreur interne</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Series"
  },
  {
    "type": "get",
    "url": "/serie/:id",
    "title": "Obtenir une serie par son id",
    "name": "GetSerieById",
    "group": "Series",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "bearer",
            "optional": false,
            "field": "token",
            "description": "<p>token obtenu lors de l'authentification</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URI": [
          {
            "group": "URI",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la série à récupérer</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Serie",
            "optional": false,
            "field": "serie",
            "description": "<p>Informations de lma série (id, nom, descr, ville, dist, nb_photos, created_at)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>L'id ne correspond pas à une série existante</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Authentification impossible ou la série n'appartient pas à l'utilisateur</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Erreur interne</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Series"
  },
  {
    "type": "get",
    "url": "/series",
    "title": "Listes des séries de l'utilisateur actuellement authentifié",
    "name": "GetSeries",
    "group": "Series",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "bearer",
            "optional": false,
            "field": "token",
            "description": "<p>token obtenu lors de l'authentification</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "QUERY": [
          {
            "group": "QUERY",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>Décalage dans la liste de résultat (min: 0)</p>"
          },
          {
            "group": "QUERY",
            "type": "Number",
            "optional": true,
            "field": "size",
            "defaultValue": "10",
            "description": "<p>Nombre d'élement du résultat (min: 1, max: 50)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Series[]",
            "optional": false,
            "field": "Series",
            "description": "<p>Le nombre total de séries de l'utilisateur et la liste des séries à partir de offset (avec size element)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Authentification incorrecte</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Erreur interne</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Series"
  },
  {
    "type": "get",
    "url": "/series/:id/photos/",
    "title": "Récupères les photos d'une série",
    "name": "getPhotosOnSerie",
    "group": "Series",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "bearer",
            "optional": false,
            "field": "token",
            "description": "<p>token de l'utilisateur</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URI": [
          {
            "group": "URI",
            "type": "UUID",
            "optional": false,
            "field": "idSerie",
            "description": "<p>Id de la série que l'utilisateur veut récupérer</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Photos",
            "optional": false,
            "field": "Photos",
            "description": "<p>Photos de la série</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>L'utilisateur n'est pas authentifié</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>idSerie est absente dans la requête</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>idSerie est incorrect</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Erreur interne</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Series"
  },
  {
    "type": "put",
    "url": "/series/:id",
    "title": "Mise à jour d'une série",
    "name": "updateSerie",
    "group": "Series",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "bearer",
            "optional": false,
            "field": "token",
            "description": "<p>token obtenu lors de l'authentification</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URI": [
          {
            "group": "URI",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la série à récupérer</p>"
          }
        ],
        "BODY": [
          {
            "group": "BODY",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>Nom de la série</p>"
          },
          {
            "group": "BODY",
            "type": "String",
            "optional": false,
            "field": "descr",
            "description": "<p>Description de la série</p>"
          },
          {
            "group": "BODY",
            "type": "String",
            "optional": false,
            "field": "ville",
            "description": "<p>Ville de la série</p>"
          },
          {
            "group": "BODY",
            "type": "Number",
            "optional": false,
            "field": "dist",
            "description": "<p>Valeur de la distance D de calcul des points</p>"
          },
          {
            "group": "BODY",
            "type": "UUID[]",
            "optional": false,
            "field": "photos",
            "description": "<p>Tableau d'id de photos à associer à la série (peut être un talbeau vide)</p>"
          },
          {
            "group": "BODY",
            "type": "Object",
            "optional": false,
            "field": "map",
            "description": "<p>Carte de la série (position easy-vue-leaflet : {lat, lng, zoom} )</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Serie",
            "optional": false,
            "field": "serie",
            "description": "<p>Nouvelles informations de la série (id, nom, descr, ville, dist, nb_photos, created_at)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>L'id ne correspond pas à une série existante</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Authentification impossible ou la série n'appartient pas à l'utilisateur</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Erreur interne</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Series"
  },
  {
    "type": "post",
    "url": "/utilisateurs",
    "title": "Inscription d'un utilisateur",
    "name": "CreateUser",
    "group": "Utilisateurs",
    "parameter": {
      "fields": {
        "BODY": [
          {
            "group": "BODY",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email de l'utilisateur (unique)</p>"
          },
          {
            "group": "BODY",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mot de passe de l'utilisateur</p>"
          },
          {
            "group": "BODY",
            "type": "String",
            "optional": false,
            "field": "passwordConfirm",
            "description": "<p>Confirmation du mot de passe de l'utilisateur</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Utilisateur",
            "optional": false,
            "field": "user",
            "description": "<p>Retourne l'id et l'email du nouvel utilisateur</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Les données rensignées sont incomplètes ou l'email est déjà utilisé par un utilisateur</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Erreur interne</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Utilisateurs"
  },
  {
    "type": "post",
    "url": "/utilisateurs/auth",
    "title": "Authentification d'un utilisateur",
    "name": "UserAuth",
    "group": "Utilisateurs",
    "header": {
      "fields": {
        "Authorisation": [
          {
            "group": "Authorisation",
            "type": "basic",
            "optional": false,
            "field": "email:password",
            "description": "<p>Identifiants de connexion de l'utilisateur encodés en base64</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Mixed",
            "optional": false,
            "field": "AuthInformation",
            "description": "<p>Informations principales de l'utilisateur (id &amp; email) et token de vérification de l'authentification.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Echec de l'authentification</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Erreur interne</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Utilisateurs"
  }
] });
