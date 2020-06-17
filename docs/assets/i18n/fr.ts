// France
export const locale = {
	lang: 'fr',
	data: {
		TRANSLATOR: {
			SELECT: 'choisissez votre langue',
			DASHBOARD: 'Tableau de bord',
			ERROR: 'Erreur',
			SAVE: 'Enregistrer',
			CANCEL: 'Annuler',
			OK: 'Ok',
			HI: 'Coucou',
			DELETE: 'Effacer',
			CONFIRM: "Confirmer",
			CLOSE: 'Fermer',
			ERROR_MESSAGE: 'Quelque chose s\'est mal passé'

		},
		MENU: {
			NEW: 'Nouveau',
			ACTIONS: 'Actions',
			CREATE_POST: 'Créer une nouvelle publication',
			PAGES: 'Pages',
			FEATURES: 'Fonctionalités',
			APPS: 'Applications',
			HOME: 'Acceuil',
			CAMPAIGNS: 'Campagnes',
			STATISTICS: {
				BASE: 'Statistiques',
				KPICAMPAIGNS: 'Indicateurs clés Campagnes',
				KPITRANSACTIONS: 'Indicateurs clés Transactions',
				REPORTS: {
					BASE: 'Rapports',
					TRANSACTIONS: 'Transactions',
					REVENUE: 'Revenus'
				}

			},
		},
		FOOTER: {
			AUTHER: {
				NAME: 'Collinson-fr'
			},
			ABOUT: {
				NAME: 'A propos de',
				DIALOG:{
					DESC:`Ce portail marketing Commerçant est accessible aux commerçants qui veulent créer par eux-mêmes 
					leur propres promotions, ainsi que voir des rapports et des indicateurs clés sur leurs initiatives de fidélisation.`,
					VERSION:'Version {{version}}',
					RELEASE:'Release {{release}}',
					EDITOR : 'Editeur {{editor}}'
				}
			},
			PRIVACY: {
				NAME: 'Confidentialité',
				URL: 'privacy_fr.pdf'
			},
			TC: {
				NAME: 'T et C',
				URL: 'tc_fr.pdf'
			},
			FAQ: {
				NAME: 'FAQ',
				URL: 'FAQ - Merchant_Engagement_Portal_fr.pdf'
			}
		},
		HOME: {
			MERCHANT_STATS: {
				TODAY: 'Ajourd\'hui',
				TRANSACTIONS: {
					LABEL: 'Transactions',
					DESC: 'Nombre de transactions du jour',
				},
				REVENUE: {
					LABEL: 'Chiffre d\'affaires',
					DESC: 'Chiffre d\'affaires du jour',
				},
				AVERAGE_PURCHASE: {
					LABEL: 'Achat moyen',
					DESC: 'Montant d\'achat moyen du jour',
				}
			}
		},
		LANDING:{
			WELCOME:'Bienvenue!',
			SELECTYOURLANGUAGE :'Sélectionnez votre langue',
			SIGNIN :'Se connecter',

		},
		PROFILE:{
			BREADCRUMB:{
				MY_PROFILE:'Mon profil'
			},
			TABS:{
				INFORMATION:{
					TAB_HEADER:'Information',
					LOGO:'Logo',
					NUMBER:'Numéro',
					NAME:'Nom',
					ADDRESS:'Adresse'
				},
				CONTACT:{
					TAB_HEADER:'Contact',
					NAME:'Nom',
					EMAIL:'Courrier électronique',
					PHONE_NUMBER:'Numéro de téléphone',
					FAX_NUMBER:'Numéro de fax'
				}
			},
			MODAL:{
				MY_PROFILE:'Mon profil',
				SIGNOUT:'Déconnecter'
			}
		},
		CAMPAIGNS: {
			LIST: {
				TITLE: 'Liste de vos campagnes',
				STATUS: {
					LABLE: 'Statut',
					ALL: 'All',
					ACTIVE: 'Active',
					EXPIRED: 'Expired',
					DELETED:'Deleted',
					PENDING:'Pending',
					UNASSIGNED:'Unassigned',
					ASSIGNED:'Assigned',
					REJECTED:'Rejected',
				},
				TYPE: {
					LABLE: 'Type',
					ALL: 'All',
					FREQUENCY: 'Frequency',
					MONETARY: 'Montant',
					RECURRING: 'Récurrents'
				},
				SEARCH: 'Recherche',
				CREATE_NEW: 'Créer nouvelle',
				CREATE_NEW_DISABLED: 'Vous ne pouvez pas créer de campagnes. Veuillez contacter votre administrateur',
				ID: 'Id',
				NAME: 'Nom',
				AWARD: 'Récompense',
				START_DATE: 'Date début',
				END_DATE: 'Date fin',
				LAST_UPDATED_DATE: 'Date mise à jour',
				OWNER: 'Créée par nous',
				ACTIONS: 'Actions',
			},
			DELETE: {
				CONFIRM_MSG: 'Etes vous sur d\'effacer cette campagne? Cette action est irréversible.',
				CAMPAIGN_NAME: 'Nom de la campagne: ',
			},
			VIEW: {
				FREQUENCY_DESC: 'Une campagne Fréquence récompense chacun de vos clients après qu\'ils aient visité vos magasins un nombre prédéfini de fois.',
				SPECIAL_DAY_DESC: 'Une campagne Jours Spéciaux récompense chacun de vos clients à certaine(s) date(s).',
				AMOUNT_DESC: 'Une campagne Montant récompense chacun de vos clients après qu\'ils aient dépensé dans vos magasins un montant prédéfini cumulé d\'achats.',
				LUCKY_DESC: 'Une campagne Lucky récompense un seul client pour la nième visite effectuée par un groupe de clients.',
				TABS:{
					DETAILS:{
						TITLE: 'Détails',
						CRITERIA: 'Critères',
						REWARDS: 'Récompenses',
						VALIDITY: 'Validité',
						PURCHASE_AMOUNT: 'Montant d\'achat',
						INFORMATION: 'Information',
						MINIMUM: 'Minimum',
						MAXIMUM: 'Maximum',
						ENJOYABLE: 'Utilisable',
						TYPE: 'Type',
						START: 'Début',
						END: 'Fin',
						UPDATED: 'Mise à jour',
						OWNER: 'Créée par',
						FREQUENCY_REWARD_DESC: 'Nombre de visites pour obtenir la récompense',
						LUCKY_REWARD_DESC: 'Nombre cumulé de visites collectives de tous les clients nécessaires pour déclencher la campagne',
						MESSAGE_FROM_ADMIN: `Message de l'administrateur`,
						NETWORK:'Réseau',
						CAPPING:'Plafonnement',
						POOL:'Cagnotte',
						POOL_CAPPING:'Limite de cagnotte',
					},
					SEGMENTATION:{
						TITLE:'Segmentation de campagne',
						DESC:'Cette campagne sera déclenchée pour les clients qui ont tous les critères ci-dessous.',
						SUB_DESC:'Si un critère de segmentation a plusieurs valeurs choisies, les clients éligibles doivent avoir au moins une des valeurs.',
					},
					NETWORK:{
						TITLE:'Réseau',
						AVAILABLEMERCHANTS:'Commerçants à enlister',
						SELECTEDMERCHANTS:'Commerçants sélectionnés',
						FILTERPLACEHOLDER:'Chercher un commerçant',
						UPDATEBUTTON:'Mettre à jour',
						MESSAGES:{
							REWARD:{
								SUBSCRIPTIONSUCCESS:`L'asssignation de la récompense a réussi!`,
								SUBSCRIPTIONUNSUCCESS:`L'assignation de la récompense a échoué!`,
								UNSUBSCRIPTIONSUCCESS:`La désassignation de la récompense a réussi!`,
								UNSUBSCRIPTIONUNSUCCESS:`La désassignation de la récompense a échoué!`,
							},
							CAMPAIGN:{
								SUBSCRIPTIONSUCCESS:`L'asssignation de la campagne a réussi!`,
								SUBSCRIPTIONUNSUCCESS:`L'asssignation de la campagne a échoué!`,
								UNSUBSCRIPTIONSUCCESS:`La désassignation de la campagne a réussi!`,
								UNSUBSCRIPTIONUNSUCCESS:`La désassignation de la campagne a échoué!`
							},
							COMMON:{
								SUCCESS:'Succès',
								ERROR:'Erreur'
							}
						},
						UN_SAVED_ASSIGNMENTS:{
							TITLE:'Assignation non sauvegardée',
							MESSAGE:`La liste de commerçants à enlister a été modifiée mais pas sauvegardée.
En continuant, tous les changements seront perdus.
							
Voulez-vous continuer, quitter la page Réseau et perdre tous vos changements ?`,
							YES_BUTTON:'Oui',
							NO_BUTTON:'Non'
						}
					}
				}
			}
		},
		SETTING: {
			TITLE: 'Configuration',
			DESC: 'Ces paramètres permettent de connecter le portail au système Realtime-XLS en version débug.',
			MERCHANT: {
				TITLE: 'Commerçant',
				MERCHANT_NUMBER: 'Numéro de commerçant',
				REQUIRED_ERROR: 'Le numéro de commerçant est requis',
				VALID_ERROR: 'Veuillez entrer un numéro de commerçant valide'
			},
			CORPORATE: {
				TITLE: `D'entreprise`,
				CORPORATE_NUMBER: `Numéro d'entreprise`,
				REQUIRED_ERROR: `Le numéro d'entreprise est obligatoire`,
				VALID_ERROR: `Veuillez entrer un numéro d'entreprise valide`
			},
			CHECKERMAKER:{
				CHECKER:'Vérificateur',
				NOCHECKER:'Pas de vérificateur'
			},
			AUTOREDEMPTION:{
				AUTO_REDEM:'Ecpn-Auto-Redeem',
				MANUAL_REDEM:'Ecpn-Manu-Redeem'
			},
			API: {
				TITLE: 'API',
				CAMPAIGN_API: 'APIs Campagne',
				MERCHANT_API: 'APIs Commerçant',
				ACCOUNT_API:'Account APIs',
				ROOT_URL: 'URL Racine',
				BASIC_KEY: 'Clé basique',
				ROOT_URL_PLACEHOLDER: 'http://server:port/version',
				CAMPAIGN_URL_REQUIRED_ERROR: 'URL de base Campagnes est requise',
				CAMPAIGN_URL_VALID_ERROR: 'Veuillez entrer une URL de base Campagnes valide',
				CAMPAIGN_KEY_REQUIRED_ERROR: 'La clé de base Campagnes est requise',
				CAMPAIGN_KEY_VALID_ERROR: 'Veuillez entrer une clé de base Campagnes valide',
				MERCHANT_URL_REQUIRED_ERROR: 'URL de base Commerçants est requise',
				MERCHANT_URL_VALID_ERROR: 'Veuillez entrer une URL de base Commerçants valide',
				MERCHANT_KEY_REQUIRED_ERROR: 'La clé de base Commerçants est requise',
				MERCHANT_KEY_VALID_ERROR: 'Veuillez entrer une clé de base Commerçants valide',
				ACCOUNT_URL_REQUIRED_ERROR: 'Account Base Url is required',
				ACCOUNT_URL_VALID_ERROR: 'Please enter a valid Account Base Url',
				ACCOUNT_KEY_REQUIRED_ERROR: 'Account Base Key is required',
				ACCOUNT_KEY_VALID_ERROR: 'Please enter a valid Account Base Key'
			},
			MISCELLANEOUS: {
				TITLE: 'Divers',
				PAYMENT_CURRENCY: 'Devise de paiement',
				CURRECNCY_PLACEHOLDER: 'Devise (exemple:$)',
				REQUIRED_ERROR: 'Le devise de paiement est requise',
				VALID_ERROR: 'Veuillez entrer une devise de paiement valide'
			},
			SAVE: 'Enregistrer',
			CANCEL: 'Annuler',
			ERROR: {
				MERCHANT:'Impossible de récupérer le merchantID à partir du merchantNumber : ',
				CORPORATE:`Impossible de récupérer le numéro d'entreprise du numéro de corprate:`
			}
		},
		CALENDAR: {
			MONTHS: {
				JAN: 'Janvier',
				FEB: 'Février',
				MAR: 'Mars',
				APR: 'Avril',
				MAY: 'Mai',
				JUN: 'Juin',
				JUL: 'Juillet',
				AUG: 'Aout',
				SEP: 'Septembre',
				OCT: 'Octobre',
				NOV: 'Novembre',
				DEC: 'Decembre'
			},
			SHORTMONTHS: {
				JAN: 'Jan',
				FEB: 'Fév',
				MAR: 'Mar',
				APR: 'Avr',
				MAY: 'Mai',
				JUN: 'Juin',
				JUL: 'Juil',
				AUG: 'Août',
				SEP: 'Septembre',
				OCT: 'Oct',
				NOV: 'Nov',
				DEC: 'Déc'
			}
		},
		CREATECAMPAIGN: {
			BREADCRUMB: {
				CAMPAIGN: 'Campagnes',
				CREATECAMPAIGN: 'Créer un nouveau'
			},
			STEP1: {
				LABEL: 'Type de campagne',
				DESC: 'Choisir quelle campagne créer',
				FORMHEADER: 'Choisir le type de campagne',
				CAMPAIGNTYPE: {
					SPECIALDAYS: {
						LABEL: 'Jours spéciaux',
						DESC: 'Récompense pendant des jours particuliers'
					},
					AMOUNTSPENT: {
						LABEL: 'Montant dépensé',
						DESC: 'Récompense liée au montant dépensé'
					},
					VISITS: {
						LABEL: 'Nombre de visites',
						DESC: 'Récompense liée aux nombres de visites'
					},
					LUCKYDAYS: {
						LABEL: 'Visiteur chanceux',
						DESC: 'Récompense basée sur un nombre collectif de visites'
					},
					RECURRING: {
						LABEL: 'Jours/heures récurrents',
						DESC: 'Récompense sur des jours et heures réguliers'
					}
				}
			},
			STEP2: {
				LABEL: 'Déclencheurs de la campagne',
				DESC: 'Choisir les critères de déclenchement',
				FORMHEADER: 'Paramétrer les déclencheurs',
				SUBHEADER:'Scénarios',
				CUSTOMERMUSTVISIT: 'Le client sera récompensé chaque fois que le nombre de visites configuré sera atteint (avec un maximum de 4 scénarios):',
				TIMESTOBEREWARDED: 'Chaque carte représente un scénario et indique le nombre total de visites depuis la première visite qui doit être atteint pour être récompensé. Cliquez sur la carte pour la supprimer.',
				AND: 'Et',
				CUSTOMERAMOUNTSPENT: 'Un client sera récompensé chaque fois que le montant cumulé configuré sera atteint (avec un maximum de quatre scénarios)',
				CUSTOMERAMOUNTSPENTSCENARIODESC: 'Chaque carte indique le montant total à cumuler depsEach card indicates the total amount since the first visit that must be reached to be rewarded. Click on a card to delete it',
				PURCHASEAMOUNTMUST: `Le montant d'achat doit être entre:`,
				CONFIRMMESSAGEHEADER: `Vous modifiez les critères de campagne alors que vous avez déjà configuré les récompenses de campagne. Toutes les récompenses configurées seront effacées.`,
				CONFIRMMESSAGE: 'Souhaitez-vous continuer ?',
				PLACEHOLDERS: {
					MINIMUM: 'Minimum',
					MAXIMUM: 'Maximum'
				},
				ERRORS: {
					NUMBEROFVISISTS: {
						MSG1: 'Le nombre de visites est requis',
						MSG2: `Merci d'entrer plus que 0 visites`,
						MSG3: `Merci d'entrer moins que 999 visites`,
						MSG4: `Un nombre fractionnaire de visites n'est pas autorisé`,
						MSG5: 'Ce nombre de visites est déjà configuré'
					},
					AMOUNTSPENT:{
						MSG1: 'La valeur du montant est requise',
						MSG2: 'La valeur du montant doit être entre 0.01 et 999999.99',
						MSG3: 'La valeur du montant est déjà configurée'						
					},
					MINPURCHASEAMT: {
						MSG1: `Le montant minimum d'achat est requis`,
						MSG2: `L'achat minimum ne peut pas être plus que 9999999.99`,
						MSG3: `Le montant d'achat minimum ne peut pas être inférieur à 0`,
						MSG4: `Le montant d'achat minimum ne peut être supérieur à 9999999,99.`
					},
					MAXPURCHASEAMT: {
						MSG1: `Le montant maximum d'achat est requis`,
						MSG2: `L'achat maximum ne peut pas être plus que 9999999.99`,
						MSG3: `L'achat maximum ne peut pas être inférieur au montant minimum`,
						MSG4: `L'achat maximum ne peut pas être inférieur au montant minimum {{minAmt}}`
					}
				},
				LUCKYVISIT: 'Un seul client sera récompensé chaque fois que le nombre de visites configuré sera atteint collectivement par tous (avec un maximum de 4 scénarios):',
				LUCKYTIMETOREWARD: 'Chaque carte indique le nombre total cumulé de visites collectives depuis la première visite qui doit être atteint pour être récompensé. Cliquez sur une carte pour la supprimer.',
				RECURRINGDAY:{
					DESC: 'Les trois éléments déclencheurs se cumulent',
					EXAMPLE: 'Par exemple, si vous choisissez << Jour du mois 2 + et jour de la semaine Lundi >>, le client est récompensé tous les lundi 2 de chaque mois',
					DAYOFMONTH: 'Jour du mois',
					MONTHDESC: 'Choisir jusqu’à 2 jours dans le mois:',
					DAY: 'Jour',
					DAYOFWEEK: 'Jour de la semaine',
					WEEKDESC: 'Sélectionner les jours de la semaine',
					DAILYHOURS: 'Plages horaires',
					HOURSDESC: 'Sélectionner la plage horaire',
					MONDAY: 'Lundi',
					TUESDAY: 'Mardi',
					WEDNESDAY: 'Mercredi',
					THURSDAY: 'Jeudi',
					FRIDAY: 'Vendredi',
					SATURDAY: 'Samedi',
					SUNDAY: 'Dimanche',
					STARTTIME: 'Heure de début:',
					ENDTIME: 'Heure de fin:',
					HOUR: 'Heure',
					MINUTES: 'Minutes'
				}
			},
			STEP3: {
				LABEL: 'Récompense de la campagne',
				DESC: 'Choisir la récompense du client',
				FORMHEADER: 'Paramétrer la récompense',
				REWARDYOURCUST: 'Récompenser votre client avec:',
				PERCTILELABEL: 'Pourcentage',
				PERCTILEDESC: 'La récompense est un pourcentage du montant dépensé',
				INSTANTDISCOUNT: `Remise immédiate`,
				INSTANTDISCOUNTDESC: `Cette récompense réduit instantanément le montant d'achat du client.`,
				NEXTVISITDISCOUNT: 'Remise prochaine visite',
				NEXTVISITDISCOUNTDESC: `Cette récompense réduit le montant d'achat du client à la prochaine visite.`,
				POOLAWARD: 'Cagnotte',
				POOLAWARDDESC: `Cette récompense permet au client de cumuler des points ou du cash back.`,
				FIXEDVALUELABEL: 'Valeur fixe',
				FIXEDVALUEDESC: 'La valeur ne dépend pas du montant dépensé',
				ENJOYABLE: 'Utilisable:',
				INSTANTLY: 'Instantanément',
				ONNEXTVISIT: 'A la prochaine visite',
				WHENTOREDEEMAWARD: 'Choisir quand la récompense est utilisable',
				CAPPING:'Plafonnement',
				INSTANT_CAPPING_DESC:'Définir un budget de récompenses (remises immédiates)',
				NEXT_VISIT_CAPPING_DESC:'Définir le nombre de récompenses à distribuer (nombre de coupons de remise prochaine visite)',
				EVERY: 'Chaque',
				SPENT: 'Dépensé',
				PLACEHOLDERS: {
					VALUEOFREWARD: 'Valeur de la récompense',
					ONEVERYSPENT: 'Montant dépensé',
					REWARD_BUDGET:'Budget limité de récompenses immédiates',
					REWARDS:'Nombre limité de coupons de remise prochaine visite'
				},
				ERRORS: {
					SCENARIO:{
						INVALID:`Veuillez configurer tous les scénarios créés pour accéder aux prochaines étapes de la création d'une campagne.`,
						INVALIDREWARDSTEP:`La liste des récompenses n'est pas configurée correctement. Veuillez configurer toutes les récompenses avant de passer aux étapes suivantes.`,
						NOREWARDERROR:`Aucune choix de type de récompense disponible, veuillez contacter votre administrateur.`
					},
					VALUEOFREWARD: {
						MSG1: 'La valeur de la récompense est requise',
						MSG2: '% devrait être dans 0.01 à 100',
						MSG3: 'La valeur doit être comprise entre 0,01 et 9999999,99.',
						MSG4: 'La valeur doit être entre 1 et 99999999'
					},
					VALUE_OF_REWARD_CAPPING:{
                        MSG1: 'La valeur du plafonnement est nécessaire',
						MSG2: 'La valeur doit être entre 1 et 99999999',
						MSG3: 'La valeur doit être entre 0.01 to 999999.99'
                    }
				}
			},
			STEP4: {
				LABEL: 'Identité de la campagne',
				DESC: 'Définir nom et durée de la campagne',
				FORMHEADER: 'Définition de la campagne',
				NAMEOFPROMOTION: 'Nom de la campagne',
				STARTDATE: 'Date de début',
				ENDDATE: 'Date de fin',
				PLACEHOLDERS: {
					CAMPAIGNNAME: 'Choisissez un nom',
					CHOOSEDATE: 'Choisissez une date'
				},
				ERRORS: {
					CAMPAIGNNAME: {
						MSG1: 'Le nom de la campagne est obligatoire',
						MSG2: 'Le nom Camapign ne peut pas comporter plus de 24 caractères.',
						MSG3: 'Seules les valeurs alphanumériques sont autorisées avec les espaces,% et $',
						MSG4: 'La date de fin ne peut pas être antérieure à la date de début',
						MSG5: 'Veuillez entrer une date de début de campagne valide.',
						MSG6: 'Veuillez entrer une date de fin de campagne valide.',
						MSG7: 'Veuillez entrer une date de début et de fin de campagne valide.'
					}
				}
			},
			STEP5: {
				LABEL: 'Résumé de la campagne',
				DESC: 'Revoir et soumettre',
				FORMHEADER: 'Vérifier votre nouvelle campagne et la soumettre',
				CAMPAIGNTYPE: {
					LABEL: 'Type de la campagne',
					TYPE: 'Nombre de visites'
				},
				CRITERIA: {
					LABEL: 'Déclencheur de la campagne',
					CUSTNUMBEROFVISITS: 'Le nombre de visites du client doit être:',
					MINPURCHASEAMT: `Montant minimum d'achat:`,
					MAXPURCHASEAMT: `Montant maximum d'achat:`
				},
				THEREWARD: {
					LABEL: 'Récompense de la campagne',
					TYPE: 'Type :',
					AMOUNT: 'Montant :',
					ENJOYABLE: 'Utilisable :',
					FIXEDVALUE: 'Valeur fixe',
					PERC: 'Pourcentage',
					INSTANT: 'Instant',
					NEXTVISIT: 'Lors de la prochaine visite'
				},
				CAMPAIGNDETAIL: {
					LABEL: 'Identité de la campagne',
					NAME: 'Nom :',
					FROM: 'De :',
					To:'à'
				}
			},
			WIZARDBUTTONS: {
				PREVIOUS: 'Précédent',
				SUBMIT: 'Soumettre',
				NEXTSTEP: `Prochain`
			},
			STEP_SEGMENTATION:{
				TITLE:'Segmentation de campagne',
				DESC:'Qui est éligible à la campagne ?',
				CRITERIA_DESC:'Cette campagne sera déclenchée pour les clients qui ont tous les critères ci-dessous',
				SELECTED:'Selectionné',
				SEGMENTATION:'Segmentation',
				REVIEW_DESC:'Clientèle ciblée',
				NO_SEGMENTATION_DESC:'Pas de segmentation définie',
				ERROR_MAXIMUM_FILTER:'Le nombre maximum de critères de segmentation a été atteint',
				ATTRIBUTES:{
					ACCOUNT_ATTRIBUTES:'Attributs clients',
					PRODUCT_ATTRIBUTES:'Attributs produits',
					TRANSACTION_ATTRIBUTES:'Attributs transactions'
				}
			},
			STEP_CAPPING: {
				LABEL: 'Plafonnement de la campagne',
				DESC: 'Quel plafonnement s\'applique',
				FORM_HEADER: 'Limiter les récompenses',
				NEXT_VISIT_SCENARIO_DISCOUNT_TITLE:'Plafonnement des remises prochaine visite',
				NEXT_VISIT_SCENARIO__DISCOUNT_DESC:'Définir le nombre de coupons de remise prochaine visite par scénario',
				INSTANT_DISCOUNT_TITLE:'Plafonnement des remises immédiates',
				GLOBAL_CAPPING_DESC:'Définir un montant global de remises immédiates pour la campagne',
				VISITS:'visites',
				MAX_NUMBER_OF_AWARDS:'Nombre maximum de récompenses',
				CAPPING_BUDGET:'Budget de campagne',
				PLACE_HOLDER:{
					BUDGET:'Budget de campagne',
					REWARDS:'Récompense(s)'
				},
				ERRORS:{
					NEXT_VISIT_CAPPING: 'La valeur doit être entre 1 et 99999999',
					INSTANT_CAPPING: 'La valeur doit être entre 0.01 to 999999.99'
				},
			},
			STEP_DETAILS:{
				ERRORS:{
					START_DATE_REQUIRED: 'La date de début de campagne est requise',
					END_DATE_REQUIRED: 'La date de fin de campagne est requise',
				},
			}
		},
		STATISTICS:{
			TRANSACTIONSKPI:{
				BREADCRUMB:{
					STRING1:'Statistiques',
					STRING2:'Indicateurs clés transactions'
				},
				DATE:'Date',
				SELECTDATE:'Selectionner une date',				
				FILTERDATE: '{{month}} {{day}}, {{year}}',
				MERCHANT:{
					VISITS:'Visites',
					TOTALNUMBEROFVISITS:'Nombre de visites clients de la journée',
					VISITORS:'Visiteurs',
					NUMBEROFUNIQUECUSTOMERS:'Nombre de visiteurs uniques de la journée',
					REVENUE:'Dépenses clients',
					TOTALREVENUEFORPERIOD:'Montant des dépenses clients de la journée',
					MAXSPENT:'Ticket maximum',
					HIGHBASKETVALUE:`Plus haut ticket d'achat de la journée`,
					AVESPENT:'Ticket moyen',
					AVGBASKETVALUE:`Ticket moyen d'achat de la journée`,
					MINSPENT:'Ticket minimum',
					MINBASKETVALUE:`Plus bas ticket d'achat de la journée`,
				},
				CORPORATE:{
					VISITS:'Visites globales',
					TOTALNUMBEROFVISITS:'Nombre total de visites clients de la journée dans le réseau',
					VISITORS:'Visiteurs globaux',
					NUMBEROFUNIQUECUSTOMERS:'Nombre total de visiteurs uniques de la journée dans le réseau',
					REVENUE:'Dépenses clients globales',
					TOTALREVENUEFORPERIOD:'Montant des dépenses clients de la journée dans le réseau',
					MAXSPENT:'Ticket maximum',
					HIGHBASKETVALUE:`Plus haut ticket d'achat de la journée dans le réseau`,
					AVESPENT:'Ticket moyen',
					AVGBASKETVALUE:`Ticket moyen d'achat de la journée dans le réseau`,
					MINSPENT:'Ticket minimum',
					MINBASKETVALUE:`Plus bas ticket d'achat de la journée dans le réseau`,
					MERCHANTSTATISTICSTABLE:{
						TITLE:'Statistiques commerçants',
						DESC:'Ce tableau fournit des indicateurs généraux pour votre enseigne répartis pour chacun des commerçants sélectionnés',
						COLUMNS:{
							NAME:'Nom',
							VISITS:'Visites',
							VISITORS:'Visiteurs',
							REVENUE: 'Dépenses clients',
							MAXSPENT:'Ticket Max.',
							AVGSPENT:'Ticket Moy.',
							MINSPENT:'Ticket Min.'
						},
						NOMERCHANTSELECTED:'Pas de commerçant sélectionné'
					}
				}
			},
			CAMPAIGNSKPI:{
				BREADCRUMB:{
					STRING1:'Statistiques',
					STRING2:'Indicateurs clés campagnes'
				},
				FILTERS:{
					CAMPAIGN:'Campagne',
					SELECTED_CAMPAIGN:'Campagne sélectionnée',
					MERCHANT: 'Commerçant',
					SELECTED_MERCHANT: 'Commerçant(s) sélectionné(s)'
				},
				MERCHANT_TABLE: {
					TITLE:'Dépenses clients',
					DESC:'Total des dépenses clients pendant la durée de la campagne',
					AMOUNT_OF_DISCOUNTS:'Montant des remises',
					DESC_DISCOUNTS:'Total des montants des remises émises par la campagne',
					NUMBER_OF_COUPONS:'Nombre de coupons',
					DESC_COUPONS:'Total du nombre de coupons émis par la campagne',
					VISITS:'Visites',
					TOTAL_NUMBER_OF_BASKETS:'Total du nombre de visites pendant la durée de la campagne',
					POOL:'Cagnotte',
					DESC_POOL:'Quantité totale d\'unités de cagnotte donnée par la campagne',
				},
				CORPORATE_TABLE: {
					TITLE: 'Statistiques Campagnes',
					DESC: 'Cette table fournit des indicateurs pour la campagne sélectionnée répartis pour chacun des commerçants sélectionnés',
					NO_CAMPAIGN_MERCHANT_SELECTED: 'Pas de campagne ni de commerçant sélectionné',
					NO_MERCHANT_SELECTED: 'Pas de commerçant sélectionné',
					COLUMNS: {
						NAME: 'Nom du commerçant',
						REVENUE: 'Dépenses clients',
						DISCOUNT: 'Remises',
						COUPONS: 'Coupons',
						VISITS: 'Visites',
						POOL:'Cagnotte',
					}
				}
			},
			TRANSACTIONSREPORT:{
				BREADCRUMB:{
					STRING1:'Statistiques',
					STRING2:'Rapports',
					STRING3:'Transactions'
				},
				BUTTON:{
					TWELVEMONTH:'12 derniers mois',
					CURRENTMONTH:'Mois en cours'
				},
				MERCHANT:{
					CHART:{
						CURRENTMONTHTITLE:'Volume de transactions - Mois en cours',
						CURRENTMONTHDESC:'Nombre total de transactions par jour',
						TWELVEMONTHTITLE:'Volume de transactions - 12 derniers mois',
						TWELVEMONTHDESC:'Nombre total de transactions par mois'
					}
				},
				CORPORATE:{
					CHART:{
						CURRENTMONTHTITLE:'Volume global de transactions - Mois en cours',
						CURRENTMONTHDESC:'Nombre total de transactions par jour dans votre réseau',
						TWELVEMONTHTITLE:'Volume global de transactions - 12 derniers mois',
						TWELVEMONTHDESC:'Nombre total de transactions par mois dans votre réseau'
					},
					MERCHANTCHART:{
						CURRENTMONTHTITLE:'Volume de transactions par commerçant - Mois en cours',
						CURRENTMONTHDESC:'Nombre total de transactions par jour pour le(s) commerçant(s) sélectionné(s)',
						TWELVEMONTHTITLE:'Volume de transactions par commerçant - 12 derniers mois',
						TWELVEMONTHDESC:'Nombre total de transactions par mois pour le(s) commerçant(s) sélectionné(s)',
						NOMERCHANTSELECTED:'Pas de commerçant sélectionné'
					},
					FILTER:{
						MERCHANT:'Commerçant',
						SELECTEDMERCHANTS:'Commerçant(s) sélectionné(s)'
					}
				}
			},
			REVENUEREPORT:{
				BREADCRUMB:{
					STRING1:'Statistiques',
					STRING2:'Rapports',
					STRING3:'Dépenses'
				},
				BUTTON:{
					TWELVEMONTH:'12 derniers mois',
					CURRENTMONTH:'Mois en cours'
				},
				MERCHANT:{
					CHART:{
						CURRENTMONTHTITLE:'Dépenses clients - Mois en cours',
						CURRENTMONTHDESC:'Montant total des dépenses clients par jour',
						TWELVEMONTHTITLE:'Dépenses clients - 12 derniers mois',
						TWELVEMONTHDESC:'Montant total des dépenses clients par mois'
					}
				},
				CORPORATE:{
					CHART:{
						CURRENTMONTHTITLE:'Dépenses clients globales - Mois en cours',
						CURRENTMONTHDESC:'Montant total des dépenses clients par jour dans votre réseau',
						TWELVEMONTHTITLE:'Dépenses clients globales - 12 derniers mois',
						TWELVEMONTHDESC:'Montant total des dépenses clients par mois dans votre réseau'
					},
					MERCHANTCHART:{
						CURRENTMONTHTITLE:'Dépenses clients par commerçant- Mois en cours',
						CURRENTMONTHDESC:'Montant total des dépenses clients par jour et par commerçant sélectionné',
						TWELVEMONTHTITLE:'Dépenses clients par commerçant - 12 derniers mois',
						TWELVEMONTHDESC:'Montant total des dépenses clients par mois et par commerçant sélectionné',
						NOMERCHANTSELECTED:'Pas de commerçant sélectionné'			
					},
					FILTER:{
						MERCHANT:'Commerçant',
						SELECTEDMERCHANTS:'Commerçant(s) sélectionné(s)'
					}
				}
			}
		},
		COMMONCOMPONENTS:{
			CHECKBOXLIST:{
				CHECKUNCHECKALL:'Cocher / Décocher tous',
				PLACEHOLDER:'Chercher'
			},
			DUALLISTBOX:{
				ADDBUTTON:'Ajouter',
				ADDALLBUTTON:'Ajouter tous',
				REMOVEBUTTON:'Enlever',
				REMOVEALLBUTTON:'Enlever tous'
			},
			SEGMENTATION:{
				EVALUATE_AUDIENCE:'Estimer la clientèle',
				CUSTOMERS:'clients',
				EVALUATE_DESCRIPTION:'Ceci est le nombre total de clients potentiellement éligibles à cette campagne à ce moment précis. Ce nombre est en constante évolution et ne peut pas être garanti.'
			},
		},
		TOASTER:{
			HOMEPAGE:{
				POST_STAT_FAILED:'Erreur. Actualisez la page ou contactez votre administrateur s’il vous plait.'
			},
			CAMPAIGNS:{
				GET_CAMPAIGN_BY_ID_FAILED:'Erreur lors de la récupération des informations de votre campagne. Veuillez réessayer ou contactez votre administrateur s’il vous plait.',
				GET_CAMPAIGNS_FAILED_CPG_LIST:'Erreur lors de la récupération de vos campagnes. Actualisez la page ou contactez votre administrateur s’il vous plait',
				GET_ACCOUNTS_ACCOUNT_FAILED_CPG_CRT:'Erreur lors de la récupération de l’audience de votre campagne. Veuillez réessayer ou contactez votre administrateur s’il vous plait.',
				GET_ACCOUNTS_ACCOUNT_FAILED_CPG_SEG:'Erreur lors de la récupération de l’audience de votre campagne. Veuillez réessayer ou contactez votre administrateur s’il vous plait.',
				GET_CAMPAIGNS_FAILED_CPG_SEL:'Erreur lors de la récupération de vos campagnes. Actualisez la page ou contactez votre administrateur s’il vous plait.',
				GET_CORP_MERC_FAILED:'Erreur lors de la récupération des marchants de votre réseau. Actualisez la page ou contactez votre administrateur s’il vous plait.',
				
				POST_CAMP_SUB_UNSUB_FAILED:'Erreur lors de la mise à jour de la souscription de votre campagne. Veuillez réessayer ou contactez votre administrateur s’il vous plait.',
				POST_CAMP_SUB_UNSUB_SUCCESS:'Votre campagne {{campaignName}} a été mise à jour',
				POST_CAMP_STAT_FAILED:'Erreur lors de la récupération des KPIs de la campagne sélectionnée. Actualisez la page ou contactez votre administrateur s’il vous plait.',
				POST_CORP_MERC_FAILED:'Erreur lors de la récupération des marchants de votre réseau. Actualisez la page ou contactez votre administrateur s’il vous plait.',
				POST_CORP_MERC_STAT_FAILED_KPI:'Erreur lors de la récupération des statistiques de vos transactions. Actualisez la page ou contactez votre administrateur s’il vous plait.',
				POST_CORP_MERC_STAT_FAILED_RPT:'Erreur lors de la génération de votre rapport. Actualisez la page ou contactez votre administrateur s’il vous plait.',
				
				DELETE_CAMPAIGN_FAILED:': Erreur lors de la suppression de votre campagne. Veuillez réessayer ou contactez votre administrateur s’il vous plait.',
				DELETE_CAMPAIGN_SUCCESS:'Votre campagne {{campaignName}} a été supprimée'
			}
		}
	}
};
