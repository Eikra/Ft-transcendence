export const i18n = new I18n.I18n({
  en: {
    settings: {
      title: "Ping Pong",
      firstName: "First Name",
      lastName: "Last Name",
      displayName: "Display Name",
      bio: "Bio",
      language: "Language",
      twoFactorAuth: "Two-factor authentication (2fa)",
      enterPin: "Enter generated code by your chosen authentication app",
      enterPinButton: "Enter PIN",
      enable2FA: "Enable 2FA",
      save: "Save changes",
      enable: "Enable",
      invalidCode: "Invalid code, please enter the correct code or try again.",
      disable2FA: "Disable 2FA",
      disable: "Disable",
      updateSuccess: "Data updated successfully",
      updateError: "Error updating data",
      settingImg: {
        noFile: "no file found in the input",
        updateSuccess: "Image updated successfully",
        updateError: "Something went wrong"
      }
    },
    navBar: {
      searchuser: "Search user...",
      viewProfile: "View my profile",
      settings: "Settings",
      logout: "Logout",
      search: "Search ..."
    },
    errors: {
      gettingData: "Error While getting data",
      userNotFound: "User Not found",
      fieldRequired: "This field can't be empty.",
      invalidInput: "Input can only contain letters, spaces, '-'"
    },
    profile: {
      totalGames: "Total games",
      wins: "Wins",
      loses: "Loses",
      draws: "Draws",
      level: "Level",
      playerPerformance: "Player Performance (Past 4 Weeks)",
      message: "Message",
      invite: "Invite",
      addFriend: "Add Friend",
      unfriend: "Unfriend",
      block: "Block",
      unblock: "Unblock",
      dashboard: "Dashboard",
      friends: "Friends",
      history: "History",
      cancelRequest: "Cancel Request",
      accept: "Accept",
      reject: "Reject",
      notifications: {
        requestSent: "Friend request sent successfully",
        requestSentError: "Failed to send friend request",
        requestAccepted: "Friend request accepted successfully",
        requestAcceptedError: "Failed to accept friend request",
        requestRejected: "Friend request rejected successfully",
        requestRejectedError: "Failed to reject friend request",
        userBlocked: "User blocked successfully",
        userBlockedError: "Failed to block user",
        userUnblocked: "User unblocked successfully",
        userUnblockedError: "Failed to unblock user",
        friendRemoved: "Friend removed successfully",
        friendRemovedError: "Failed to remove friend",
        requestCancelled: "Request cancelled successfully",
        requestCancelledError: "Failed to cancel request"
      }
    },
    leaderboard: {
      title: "Leaderboard",
      matchesPlayed: "Matches played",
      wins: "Wins",
      points: "Points",
      rank: "#"
    },
    invitation: {
      expired: "This invitation has expired.",
      play_game: "Let's play a game!",
      play_button: "Play",
      expire_warning: "This invitation will expire after 10 minutes."
    },
    chat: {
      message_placeholder: "Message...",
      loading: "Loading...",
      error: "Error: {error}",
      empty_messages_alt: "Empty messages illustration",
      start_message: "Send a message to start a chat."
    },
    friends: {
      select_label: "Filter friends list",
      status: {
        friends: "Friends",
        pending: "Pending",
        blocked: "Blocked"
      },
      no_data: "No Data Found"
    },
    match_history: {
      no_matches: "No Match History Found",
      filter_label: "Filter match history",
      filter: {
        all: "All",
        pong: "Pong",
        tic_tac_toe: "Tic Tac Toe"
      }
    },
    not_found: {
      message: "This page is outside the known universe.",
      image_alt: "404 Page Not Found illustration"
    },
    tournament: {
      create: {
        title: "Create Tournament",
        name_label: "Tournament Name",
        name_placeholder: "Enter tournament name",
        players_label: "Number of Players",
        players_select_aria: "Select number of players",
        submit: "Create",
        success: "Tournament created successfully"
      },
      card: {
        avatar_alt: "Tournament owner avatar",
        unnamed: "Unnamed Tournament",
        available_slots: "Available Slots",
        max_slots: "Max Slots",
        not_available: "N/A",
        join: "Join",
        view: "View"
      },
      detail: {
        loading: "Loading tournament details...",
        lobby_title: "Tournament Lobby",
        unnamed: "Unnamed Tournament",
        available_slots: "Available Slots: {{count}}",
        back_button: "Back to Tournaments",
        errors: {
          missing_id: "Tournament ID is missing.",
          fetch_error: "Error fetching tournament details: {{status}}",
          incomplete_data: "Incomplete tournament data received.",
          load_failed: "Failed to load tournament details.",
          start_error: "Error: {{error}}",
          network_error: "Failed to start tournament due to a network error."
        },
        notifications: {
          start_success: "Tournament has started successfully!"
        },
        logs: {
          matches_exist: "Matches already exist. Showing rounds...",
          tournament_started: "Tournament started successfully:",
          start_failed: "Failed to start tournament:",
          start_error: "Error starting tournament:"
        }
      },
      header: {
        title: "Tournaments",
        create_button: "Create Tournament"
      }
    },
    common: {
      cancel: "Cancel"
    }
  },
  fr: {
    settings: {
      title: "Ping Pong",
      firstName: "Prénom",
      lastName: "Nom",
      displayName: "Nom d'affichage",
      bio: "Biographie",
      language: "Langue",
      twoFactorAuth: "Authentification à deux facteurs (2fa)",
      enterPin: "Entrez le code généré par votre application d'authentification choisie",
      enterPinButton: "Entrer le code PIN",
      enable2FA: "Activer 2FA",
      save: "Enregistrer",
      enable: "Activer",
      invalidCode: "Code invalide, veuillez entrer le code correct ou réessayer.",
      disable2FA: "Désactiver l'A2F",
      disable: "Désactiver",
      updateSuccess: "Données mises à jour avec succès",
      updateError: "Erreur lors de la mise à jour des données",
      settingImg: {
        noFile: "aucun fichier trouvé dans l'entrée",
        updateSuccess: "Image mise à jour avec succès",
        updateError: "Quelque chose s'est mal passé"
      }
    },
    navBar: {
      searchuser: "Rechercher un utilisateur...",
      viewProfile: "Voir mon profil",
      settings: "Paramètres",
      logout: "Déconnexion",
      search: "Rechercher ..."
    },
    errors: {
      gettingData: "Erreur lors de la récupération des données",
      userNotFound: "Utilisateur non trouvé",
      fieldRequired: "Ce champ ne peut pas être vide.",
      invalidInput: "La saisie ne peut contenir que des lettres, des espaces et '-'"
    },
    profile: {
      totalGames: "Nombre total de parties",
      wins: "Victoires",
      loses: "Défaites",
      draws: "Matchs nuls",
      level: "Niveau",
      playerPerformance: "Performance du joueur (4 dernières semaines)",
      message: "Message",
      invite: "Inviter",
      addFriend: "Ajouter un ami",
      unfriend: "Retirer des amis",
      block: "Bloquer",
      unblock: "Débloquer",
      dashboard: "Tableau de bord",
      friends: "Amis",
      history: "Historique",
      cancelRequest: "Annuler la demande",
      accept: "Accepter",
      reject: "Refuser",
      notifications: {
        requestSent: "Demande d'ami envoyée avec succès",
        requestSentError: "Échec de l'envoi de la demande d'ami",
        requestAccepted: "Demande d'ami acceptée avec succès",
        requestAcceptedError: "Échec de l'acceptation de la demande d'ami",
        requestRejected: "Demande d'ami refusée avec succès",
        requestRejectedError: "Échec du refus de la demande d'ami",
        userBlocked: "Utilisateur bloqué avec succès",
        userBlockedError: "Échec du blocage de l'utilisateur",
        userUnblocked: "Utilisateur débloqué avec succès",
        userUnblockedError: "Échec du déblocage de l'utilisateur",
        friendRemoved: "Ami supprimé avec succès",
        friendRemovedError: "Échec de la suppression de l'ami",
        requestCancelled: "Demande annulée avec succès",
        requestCancelledError: "Échec de l'annulation de la demande"
      }
    },
    leaderboard: {
      title: "Classement",
      matchesPlayed: "Parties jouées",
      wins: "Victoires",
      points: "Points",
      rank: "#"
    },
    invitation: {
      expired: "Cette invitation a expiré.",
      play_game: "Jouons à un jeu !",
      play_button: "Jouer",
      expire_warning: "Cette invitation expirera après 10 minutes."
    },
    chat: {
      message_placeholder: "Message...",
      loading: "Chargement...",
      error: "Erreur: {error}",
      empty_messages_alt: "Illustration de messages vides",
      start_message: "Envoyez un message pour démarrer une conversation."
    },
    friends: {
      select_label: "Filtrer la liste d'amis",
      status: {
        friends: "Amis",
        pending: "En attente",
        blocked: "Bloqués"
      },
      no_data: "Aucune donnée trouvée"
    },
    match_history: {
      no_matches: "Aucun historique de match trouvé",
      filter_label: "Filtrer l'historique des matchs",
      filter: {
        all: "Tous",
        pong: "Pong",
        tic_tac_toe: "Tic Tac Toe"
      }
    },
    not_found: {
      message: "Cette page est en dehors de l'univers connu.",
      image_alt: "Illustration 404 Page Non Trouvée"
    },
    tournament: {
      create: {
        title: "Créer un tournoi",
        name_label: "Nom du tournoi",
        name_placeholder: "Entrez le nom du tournoi",
        players_label: "Nombre de joueurs",
        players_select_aria: "Sélectionnez le nombre de joueurs",
        submit: "Créer",
        success: "Tournoi créé avec succès"
      },
      card: {
        avatar_alt: "Avatar du propriétaire du tournoi",
        unnamed: "Tournoi sans nom",
        available_slots: "Places disponibles",
        max_slots: "Places maximum",
        not_available: "N/D",
        join: "Rejoindre",
        view: "Voir"
      },
      detail: {
        loading: "Chargement des détails du tournoi...",
        lobby_title: "Lobby du tournoi",
        unnamed: "Tournoi sans nom",
        available_slots: "Places disponibles : {{count}}",
        back_button: "Retour aux tournois",
        errors: {
          missing_id: "ID du tournoi manquant.",
          fetch_error: "Erreur lors de la récupération des détails du tournoi : {{status}}",
          incomplete_data: "Données du tournoi incomplètes reçues.",
          load_failed: "Échec du chargement des détails du tournoi.",
          start_error: "Erreur : {{error}}",
          network_error: "Échec du démarrage du tournoi en raison d'une erreur réseau."
        },
        notifications: {
          start_success: "Le tournoi a démarré avec succès !"
        },
        logs: {
          matches_exist: "Les matches existent déjà. Affichage des tours...",
          tournament_started: "Tournoi démarré avec succès :",
          start_failed: "Échec du démarrage du tournoi :",
          start_error: "Erreur lors du démarrage du tournoi :"
        }
      },
      header: {
        title: "Tournois",
        create_button: "Créer un tournoi"
      }
    },
    common: {
      cancel: "Annuler"
    }
  },
  sp: {
    settings: {
      title: "Ping Pong",
      firstName: "Nombre",
      lastName: "Apellido",
      displayName: "Nombre para mostrar",
      bio: "Biografía",
      language: "Idioma",
      twoFactorAuth: "Autenticación de dos factores (2fa)",
      enterPin: "Ingrese el código generado por su aplicación de autenticación elegida",
      enterPinButton: "Ingresar PIN",
      enable2FA: "Habilitar 2FA",
      save: "Guardar",
      enable: "Habilitar",
      invalidCode: "Código inválido, ingrese el código correcto o intente nuevamente.",
      disable2FA: "Desactivar 2FA",
      disable: "Desactivar",
      updateSuccess: "Datos actualizados correctamente",
      updateError: "Error al actualizar los datos",
      settingImg: {
        noFile: "no se encontró ningún archivo en la entrada",
        updateSuccess: "Imagen actualizada correctamente",
        updateError: "Algo salió mal"
      }
    },
    navBar: {
      searchuser: "Buscar usuario...",
      viewProfile: "Ver mi perfil",
      settings: "Configuración",
      logout: "Cerrar sesión",
      search: "Buscar ..."
    },
    errors: {
      gettingData: "Error al obtener datos",
      userNotFound: "Usuario no encontrado",
      fieldRequired: "Este campo no puede estar vacío.",
      invalidInput: "La entrada solo puede contener letras, espacios y '-'"
    },
    profile: {
      totalGames: "Juegos totales",
      wins: "Victorias",
      loses: "Derrotas",
      draws: "Empates",
      level: "Nivel",
      playerPerformance: "Rendimiento del jugador (Últimas 4 semanas)",
      message: "Mensaje",
      invite: "Invitar",
      addFriend: "Agregar amigo",
      unfriend: "Eliminar amigo",
      block: "Bloquear",
      unblock: "Desbloquear",
      dashboard: "Panel",
      friends: "Amigos",
      history: "Historial",
      cancelRequest: "Cancelar solicitud",
      accept: "Aceptar",
      reject: "Rechazar",
      notifications: {
        requestSent: "Solicitud de amistad enviada correctamente",
        requestSentError: "Error al enviar la solicitud de amistad",
        requestAccepted: "Solicitud de amistad aceptada correctamente",
        requestAcceptedError: "Error al aceptar la solicitud de amistad",
        requestRejected: "Solicitud de amistad rechazada correctamente",
        requestRejectedError: "Error al rechazar la solicitud de amistad",
        userBlocked: "Usuario bloqueado correctamente",
        userBlockedError: "Error al bloquear usuario",
        userUnblocked: "Usuario desbloqueado correctamente",
        userUnblockedError: "Error al desbloquear usuario",
        friendRemoved: "Amigo eliminado correctamente",
        friendRemovedError: "Error al eliminar amigo",
        requestCancelled: "Solicitud cancelada correctamente",
        requestCancelledError: "Error al cancelar la solicitud"
      }
    },
    leaderboard: {
      title: "Tabla de clasificación",
      matchesPlayed: "Partidas jugadas",
      wins: "Victorias",
      points: "Puntos",
      rank: "#"
    },
    invitation: {
      expired: "Esta invitación ha caducado.",
      play_game: "¡Juguemos un juego!",
      play_button: "Jugar",
      expire_warning: "Esta invitación caducará después de 10 minutos."
    },
    chat: {
      message_placeholder: "Mensaje...",
      loading: "Cargando...",
      error: "Error: {error}",
      empty_messages_alt: "Ilustración de mensajes vacíos",
      start_message: "Envía un mensaje para iniciar un chat."
    },
    friends: {
      select_label: "Filtrar lista de amigos",
      status: {
        friends: "Amigos",
        pending: "Pendientes",
        blocked: "Bloqueados"
      },
      no_data: "No se encontraron datos"
    },
    match_history: {
      no_matches: "No se encontró historial de partidas",
      filter_label: "Filtrar historial de partidas",
      filter: {
        all: "Todos",
        pong: "Pong",
        tic_tac_toe: "Tres en línea"
      }
    },
    not_found: {
      message: "Esta página está fuera del universo conocido.",
      image_alt: "Ilustración 404 Página No Encontrada"
    },
    tournament: {
      create: {
        title: "Crear Torneo",
        name_label: "Nombre del torneo",
        name_placeholder: "Ingrese el nombre del torneo",
        players_label: "Número de jugadores",
        players_select_aria: "Seleccione el número de jugadores",
        submit: "Crear",
        success: "Torneo creado exitosamente"
      },
      card: {
        avatar_alt: "Avatar del propietario del torneo",
        unnamed: "Torneo sin nombre",
        available_slots: "Espacios disponibles",
        max_slots: "Espacios máximos",
        not_available: "N/D",
        join: "Unirse",
        view: "Ver"
      },
      detail: {
        loading: "Cargando detalles del torneo...",
        lobby_title: "Lobby del torneo",
        unnamed: "Torneo sin nombre",
        available_slots: "Espacios disponibles: {{count}}",
        back_button: "Volver a torneos",
        errors: {
          missing_id: "Falta el ID del torneo.",
          fetch_error: "Error al obtener detalles del torneo: {{status}}",
          incomplete_data: "Datos incompletos del torneo recibidos.",
          load_failed: "Error al cargar los detalles del torneo.",
          start_error: "Error: {{error}}",
          network_error: "Error al iniciar el torneo debido a un error de red."
        },
        notifications: {
          start_success: "¡El torneo ha iniciado exitosamente!"
        },
        logs: {
          matches_exist: "Las partidas ya existen. Mostrando rondas...",
          tournament_started: "Torneo iniciado exitosamente:",
          start_failed: "Error al iniciar el torneo:",
          start_error: "Error al iniciar el torneo:"
        }
      },
      header: {
        title: "Torneos",
        create_button: "Crear torneo"
      }
    },
    common: {
      cancel: "Cancelar"
    }
  }
});