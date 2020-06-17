// USA
export const locale = {
	lang: 'en',
	data: {
		TRANSLATOR: {
			SELECT: 'Select your language',
			DASHBOARD: 'Dashboard',
			ERROR: 'Error',
			SAVE: 'Save',
			CANCEL: 'Cancel',
			OK: 'Ok',
			HI: 'Hi',
			DELETE: 'Delete',
			CONFIRM: "Confirmation",
			CLOSE: 'Close',
			ERROR_MESSAGE: 'Something went wrong'
		},
		MENU: {
			NEW: 'New',
			ACTIONS: 'Actions',
			CREATE_POST: 'Create new post',
			PAGES: 'Pages',
			FEATURES: 'Features',
			APPS: 'Apps',
			HOME: 'Home',
			CAMPAIGNS: 'Campaigns',
			STATISTICS: {
				BASE: 'Statistics',
				KPICAMPAIGNS: 'KPI Campaigns',
				KPITRANSACTIONS: 'KPI Transactions',
				REPORTS: {
					BASE: 'Reports',
					TRANSACTIONS: 'Transactions',
					REVENUE: 'Revenues'
				}

			},
		},
		FOOTER: {
			AUTHER: {
				NAME: 'Collinson'
			},
			ABOUT: {
				NAME: 'About',
				DIALOG:{
					DESC:`This Merchant Engagement portal is accessible to retailers who want to 
					create by themselves their own promotions as well as to view some reports and key performances indicators about their loyalty initiatives.`,
					VERSION:'Version {{version}}',
					RELEASE:'Release {{release}}',
					EDITOR : 'Editor {{editor}}'
				}
			},
			PRIVACY: {
				NAME: 'Privacy',
				URL: 'privacy_en.pdf'
			},
			TC: {
				NAME: 'T&Cs',
				URL: 'tc_en.pdf'
			},
			FAQ: {
				NAME: 'FAQ',
				URL: 'FAQ - Merchant_Engagement_Portal_en.pdf'
			}
		},
		HOME: {
			MERCHANT_STATS: {
				TODAY: 'Today',
				TRANSACTIONS: {
					LABEL: 'Transactions',
					DESC: 'Today\'s number of transactions',
				},
				REVENUE: {
					LABEL: 'Revenues',
					DESC: 'Today\'s revenues',
				},
				AVERAGE_PURCHASE: {
					LABEL: 'Average purchase',
					DESC: 'Today\'s average transaction amount',
				}
			}
		},
		LANDING:{
			WELCOME:'Welcome !',
			SELECTYOURLANGUAGE :'Select your language',
			SIGNIN :'Sign In',

		},
		CAMPAIGNS: {
			LIST: {
				TITLE: 'List of your campaigns',
				STATUS: {
					LABLE: 'Status',
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
					LUCKY: 'Lucky',
					MONETARY: 'Amount',
					EVENT: 'Special Day',
					RECURRING: 'Recurring'
				},
				SEARCH: 'Search',
				CREATE_NEW: 'Create New',
				CREATE_NEW_DISABLED:'You cannot create new campaigns. Please contact your administrator',
				ID: 'Id',
				NAME: 'Name',
				AWARD: 'Award',
				START_DATE: 'Start Date',
				END_DATE: 'End Date',
				LAST_UPDATED_DATE: 'Last updated date',
				OWNER: 'Created by us',
				ACTIONS: 'Actions',
			},
			DELETE: {
				CONFIRM_MSG: 'Are you sure you want to delete this campaign? This action cannot be undone.',
				CAMPAIGN_NAME: 'Campaign name: ',
			},
			VIEW: {
				FREQUENCY_DESC: 'A Frequency campaign rewards each of your customers after they visit your stores a pre-defined number of visits.',
				SPECIAL_DAY_DESC: 'A Special Day campaign rewards each of your customers only on selected day(s).',
				AMOUNT_DESC: 'An Amount campaign rewards each of your customers after they spend in your stores a pre-defined cumulated amount.',
				LUCKY_DESC: 'A Lucky campaign rewards a single customer for the nth visit done by a group of customers.',
				NETWORK:'Network',
				TABS:{
					DETAILS:{
						TITLE: 'Details',
						CRITERIA: 'Criteria',
						REWARDS: 'Rewards',
						VALIDITY: 'Validity',
						PURCHASE_AMOUNT: 'Purchase amount',
						INFORMATION: 'Information',
						MINIMUM: 'Minimum',
						MAXIMUM: 'Maximum',
						ENJOYABLE: 'Enjoyable',
						TYPE: 'Type',
						START: 'Start',
						END: 'End',
						UPDATED: 'Updated',
						OWNER: 'Created by us',
						FREQUENCY_REWARD_DESC: 'Number of visits to be rewarded',
						AMOUNT_REWARD_DESC: 'Individual cumulated amount needed to trigger the campaign',
						LUCKY_REWARD_DESC: 'Cumulated number of collective visits by all customers needed to trigger the campaign',
						MESSAGE_FROM_ADMIN: 'Message from admin',
						CAPPING:'Capping',
						POOL:'Pool',
						POOL_CAPPING:'Pool capping',
					},
					SEGMENTATION:{
						TITLE:'Campaign segmentation',
						DESC:'This campaign will be triggered for customers who match all the criteria below',
						SUB_DESC:'If segmentation criteria has several selected values, the customer needs to match at least one of these values',
					},
					NETWORK:{
						TITLE:'Network',
						AVAILABLEMERCHANTS:'Available Merchants',
						SELECTEDMERCHANTS:'Selected Merchants',
						FILTERPLACEHOLDER:'Search a Merchant',
						UPDATEBUTTON:'Update',
						MESSAGES:{
							REWARD:{
								SUBSCRIPTIONSUCCESS:'Subscription of reward is successfull!',
								SUBSCRIPTIONUNSUCCESS:'Subscription of reward is unsuccessfull!',
								UNSUBSCRIPTIONSUCCESS:'Un-subscription of reward is successfull!',
								UNSUBSCRIPTIONUNSUCCESS:'Un-subscription of reward is unsuccessfull!'								
							},
							CAMPAIGN:{
								SUBSCRIPTIONSUCCESS:'Subscription of campaign is successfull!',
								SUBSCRIPTIONUNSUCCESS:'Subscription of campaign is unsuccessfull!',
								UNSUBSCRIPTIONSUCCESS:'Un-subscription of campaign is successfull!',
								UNSUBSCRIPTIONUNSUCCESS:'Un-subscription of campaign is unsuccessfull!'
							},
							COMMON:{
								SUCCESS:'Success',
								ERROR:'Error'
							}
						},
						UN_SAVED_ASSIGNMENTS:{
							TITLE:'Unsaved assignment',
							MESSAGE:`You modified the list of selected merchants but you did not click on Refresh.
By continuing, all your changes to the list will be lost.

Do you want to continue, leave the Network page and loose all your changes ?`,
							YES_BUTTON:'Yes',
							NO_BUTTON:'No'
						}
					}
				}
			}
		},
		SETTING: {
			TITLE: 'Settings',
			DESC: 'These settings are used to connect the portal to the Realtime-XLS system on the product version.',
			MERCHANT: {
				TITLE: 'Merchant',
				MERCHANT_NUMBER: 'Merchant Number',
				REQUIRED_ERROR: 'Merchant Number is required',
				VALID_ERROR: 'Please enter a valid Merchant Number'
			},
			CORPORATE: {
				TITLE: 'Corporate',
				CORPORATE_NUMBER: 'Corporate Number',
				REQUIRED_ERROR: 'Corporate Number is required',
				VALID_ERROR: 'Please enter a valid Corporate Number'
			},
			CHECKERMAKER:{
				CHECKER:'Checker',
				NOCHECKER:'No Checker'
			},
			AUTOREDEMPTION:{
				AUTO_REDEM:'Ecpn-Auto-Redeem',
				MANUAL_REDEM:'Ecpn-Manu-Redeem'
			},
			API: {
				TITLE: 'API',
				CAMPAIGN_API: 'Campaign APIs',
				MERCHANT_API: 'Merchant APIs',
				ACCOUNT_API:'Account APIs',
				ROOT_URL: 'Root URL',
				BASIC_KEY: 'Basic Key',
				ROOT_URL_PLACEHOLDER: 'http://server:port/version',
				CAMPAIGN_URL_REQUIRED_ERROR: 'Campaign Base Url is required',
				CAMPAIGN_URL_VALID_ERROR: 'Please enter a valid Campaign Base Url',
				CAMPAIGN_KEY_REQUIRED_ERROR: 'Campaign Base Key is required',
				CAMPAIGN_KEY_VALID_ERROR: 'Please enter a valid  Campaign Base Key',
				MERCHANT_URL_REQUIRED_ERROR: 'Merchant Base Url is required',
				MERCHANT_URL_VALID_ERROR: 'Please enter a valid Merchant Base Url',
				MERCHANT_KEY_REQUIRED_ERROR: 'Merchant Base Key is required',
				MERCHANT_KEY_VALID_ERROR: 'Please enter a valid Merchant Base Key',
				ACCOUNT_URL_REQUIRED_ERROR: 'Account Base Url is required',
				ACCOUNT_URL_VALID_ERROR: 'Please enter a valid Account Base Url',
				ACCOUNT_KEY_REQUIRED_ERROR: 'Account Base Key is required',
				ACCOUNT_KEY_VALID_ERROR: 'Please enter a valid Account Base Key'
			},
			MISCELLANEOUS: {
				TITLE: 'Miscellaneous',
				PAYMENT_CURRENCY: 'Payment currency',
				CURRECNCY_PLACEHOLDER: 'Currency(e.g.:$)',
				REQUIRED_ERROR: 'Payment Currency is required',
				VALID_ERROR: 'Please enter a valid  Payment Currency'
			},
			SAVE: 'Save',
			CANCEL: 'Cancel',
			ERROR: {
				MERCHANT:'Could not retrieve the merchantID from the merchantNumber : ',
				CORPORATE:'Could not retrieve the Corporate from the Corprate number : ',
				REWARD: 'At least one reward required ',
				POOL: 'Pool Number not found'
			}
		},
		PROFILE:{
			BREADCRUMB:{
				MY_PROFILE:'My profile'
			},
			TABS:{
				INFORMATION:{
					TAB_HEADER:'Information',
					LOGO:'Logo',
					NUMBER:'Number',
					NAME:'Name',
					ADDRESS:'Address'
				},
				CONTACT:{
					TAB_HEADER:'Contact',
					NAME:'Name',
					EMAIL:'Email address',
					PHONE_NUMBER:'Phone number',
					FAX_NUMBER:'Fax number'
				}
			},
			MODAL:{
				MY_PROFILE:'My profile',
				SIGNOUT:'Sign out'
			}
		},
		CALENDAR: {
			MONTHS: {
				JAN: 'January',
				FEB: 'February',
				MAR: 'March',
				APR: 'April',
				MAY: 'May',
				JUN: 'June',
				JUL: 'July',
				AUG: 'August',
				SEP: 'September',
				OCT: 'October',
				NOV: 'November',
				DEC: 'December'
			},
			SHORTMONTHS: {
				JAN: 'Jan',
				FEB: 'Feb',
				MAR: 'Mar',
				APR: 'Apr',
				MAY: 'May',
				JUN: 'Jun',
				JUL: 'Jul',
				AUG: 'Aug',
				SEP: 'Sept',
				OCT: 'Oct',
				NOV: 'Nov',
				DEC: 'Dec'
			}
		},
		CREATECAMPAIGN: {
			BREADCRUMB: {
				CAMPAIGN: 'Campaigns',
				CREATECAMPAIGN: 'Create New'
			},
			STEP1: {
				LABEL: 'Campaign type',
				DESC: 'What campaign is selected',
				FORMHEADER: 'Choose type of campaign',
				CAMPAIGNTYPE: {
					SPECIALDAYS: {
						LABEL: 'Special days',
						DESC: 'Reward during specific days'
					},
					AMOUNTSPENT: {
						LABEL: 'Amount spent',
						DESC: 'Reward based on the amount spent'
					},
					VISITS: {
						LABEL: 'Number of visits',
						DESC: 'Reward based on number of visits'
					},
					LUCKYDAYS: {
						LABEL: 'Lucky visitor',
						DESC: 'Reward based on a collective number of visits'
					},
					RECURRING: {
						LABEL: 'Recurring Days/Hours',
						DESC: 'Reward on regular days / hours'
					}
				}
			},
			STEP2: {
				LABEL: 'Campaign triggers',
				DESC: 'How the campaign is triggered',
				FORMHEADER: 'Setup the triggers',
				SUBHEADER:'Scenarios',
				CUSTOMERMUSTVISIT: 'Customer will be rewarded each time the configured numbers of visits is reached (with a maximum of 4 scenarios):',
				TIMESTOBEREWARDED: 'Each card represents a scenario and indicates the total number of visits since the first visit that must be reached to be rewarded. Click on card to delete it.',
				AND: 'And',
				CUSTOMERAMOUNTSPENT: 'Customer will be awarded each time the configure cumulated amount is reached (with a maximum of four scenarios)',
				CUSTOMERAMOUNTSPENTSCENARIODESC: 'Each card indicates the total amount since the first visit that must be reached to be rewarded. Click on a card to dele it',
				PURCHASEAMOUNTMUST: 'Purchase amount must be between:',
				CONFIRMMESSAGEHEADER: 'You are modifying the campaign criteria whereas you already configured the campaign rewards. All the configured rewards will be erased.',
				CONFIRMMESSAGE: 'Do you wish to continue ?',
				PLACEHOLDERS: {
					MINIMUM: 'Minimum',
					MAXIMUM: 'Maximum'
				},
				ERRORS: {
					NUMBEROFVISISTS: {
						MSG1: 'Number of visits is required',
						MSG2: 'Please enter visits more than 0',
						MSG3: 'Please enter visits less than 999',
						MSG4: 'Fractional number of visits not allowed',
						MSG5: 'This number of visits is already configured'
					},
					AMOUNTSPENT: {
						MSG1: 'Amount value is required',
						MSG2: 'Amount value should be in 0.01 to 999999.99',
						MSG3: 'This amount value is already configured'
					},
					MINPURCHASEAMT: {
						MSG1: 'Min purchase amount is required:',
						MSG2: 'Min purchase can not be more than 9999999.99',
						MSG3: 'Min purchase amount can not be less than 0',
						MSG4: 'Min purchase amount can not be more than 9999999.99'
					},
					MAXPURCHASEAMT: {
						MSG1: 'Max purchase amount is required',
						MSG2: 'Max purchase can not be more than 9999999.99',
						MSG3: 'Max purchase can not be less than min amount',
						MSG4: 'Max purchase can not be less than min amount {{minAmt}}'
					},
					SPECIALDAY: {
						MSG1: 'Date and month is required',
						MSG2: '8 dates are added',
						MSG3: 'Please select day',
						MSG4: 'Please select month',
						MSG5: 'Please select day and date before adding',
						MSG6: 'Day and Month already exist',
					}
				},
				LUCKYVISIT: 'Only one customer will be rewarded each time the configured numbers of visits is reached collectively by all (with a maximum of 4 scenarios):',
				LUCKYTIMETOREWARD: 'Each card indicates the total cumulated number of collective visits since since the first visit that must be reached to be rewarded. Click on a card to delete it.',
				EVENT: 'Customer will be rewarded each selected day (Maximum 8)',
				EVENTTIMETOREWARD: 'Each card indicates is a configured special day. Click on a card to delete it.',
				DAY: 'Day',
				OF: 'Of',
				MONTH: 'Month',
				RECURRINGDAY:{
					DESC: 'The 3 triggers are cummulative',
					EXAMPLE: 'For exampla, if you choose << Day of the month 2 + and Day of the week Monday >>, the customer is rewarded every Monday, 2nd.',
					DAYOFMONTH: 'Day of the month',
					MONTHDESC: 'Select up to 2 days in the month:',
					DAY: 'Day',
					DAYOFWEEK:'Day of the week',
					WEEKDESC: 'Select days of the week',
					DAILYHOURS: 'Daily hours',
					HOURSDESC: 'Select the time range',
					MONDAY: 'Monday',
					TUESDAY: 'Tuesday',
					WEDNESDAY: 'Wednesday',
					THURSDAY: 'Thursday',
					FRIDAY: 'Friday',
					SATURDAY: 'Saturday',
					SUNDAY: 'Sunday',
					STARTTIME: 'Start time:',
					ENDTIME: 'End time',
					HOUR: 'Hour',
					MINUTES: 'Minutes' 
				}
			},
			STEP3: {
				LABEL: 'Campaign reward',
				DESC: 'How the customer is rewarded',
				FORMHEADER: 'Configure the reward',
				REWARDYOURCUST: 'You can configure up to 4 scenarios per campaign.'
								+'Instant Discounts are exclusive and cannot be associated with any other reward.',
				PERCTILELABEL: 'Percentage',
				PERCTILEDESC: 'The reward is a percentage of the amount spent',
				INSTANTDISCOUNT: 'Instant Discount',
				INSTANTDISCOUNTSMALL: 'Instant discount',
				INSTANTDISCOUNTDESC: 'This reward instantly reduces the puchase amount of the customer.',
				NEXTVISITDISCOUNT: 'Next Visit Discount',
				NEXTVISITDISCOUNTSMALL: 'Next visit discount',
				NEXTVISITDISCOUNTDESC: 'This reward reduces the puchase amount of the customer on the next visit.',
				POOLAWARD: 'Pool Award',
				POOLAWARDSMALL: 'Pool award',
				POOLAWARDDESC: 'This reward let the customer cumulate points or cash back over time.',				
				FIXEDVALUELABEL: 'Fixed Value',
				FIXEDVALUEDESC: 'The value is not dependent of the amount spent',
				ENJOYABLE: 'Enjoyable:',
				INSTANTLY: 'Instantly',
				ONNEXTVISIT: 'On next visit',
				WHENTOREDEEMAWARD: 'Chose when to redeem the award',
				CAPPING:'Capping',
				INSTANT_CAPPING_DESC:'Define a budget for the rewards (instant discounts)',
				NEXT_VISIT_CAPPING_DESC:'Define the number of rewards distributed (number of discounts at next visit)',
				EVERY: 'Every',
				SPENT: 'Spent',
				EVENTREWARDYOURCUST: 'Please choose how the customer will be rewarded. The reward will be same for each day configured',
				PLACEHOLDERS: {
					VALUEOFREWARD: 'Value of reward',
					ONEVERYSPENT: 'Amount spent',
					REWARD_BUDGET:'Limited budget of instant discounts',
					REWARDS:'Limited number of discounts at next visit'
				},
				ERRORS: {
					SCENARIO:{
						INVALID:'Please configure all created scenarios to access the next steps of the campaign creation.',
						INVALIDREWARDSTEP:'The list of rewards is not configured properly. Please configure all the rewards before going to the next steps.',
						NOREWARDERROR:'No award type available, please contact your administrator.'
					},
					VALUEOFREWARD: {
						MSG1: 'Value of reward is required',
						MSG2: '% should be in 0.01 to 100',
						MSG3: 'Value should be in 0.01 to 9999999.99',
						MSG4: 'Value should be in 1 to 99999999'
					},
					VALUE_OF_REWARD_CAPPING:{
                        MSG1: 'Value of capping is required',
						MSG2: 'Value should be in 1 to 99999999',
						MSG3: 'Value should be in 0.01 to 999999.99'
                    }
				}
			},
			STEP4: {
				LABEL: 'Campaign identity',
				DESC: 'How the campaign is named',
				FORMHEADER: 'Campaign definition',
				NAMEOFPROMOTION: 'Name of the campaign',
				STARTDATE: 'Start date',
				ENDDATE: 'End Date',
				PLACEHOLDERS: {
					CAMPAIGNNAME: 'Choose a name',
					CHOOSEDATE: 'Choose a date'
				},
				ERRORS: {
					CAMPAIGNNAME: {
						MSG1: 'Campaign name is required',
						MSG2: 'Camapign name can not be more than 24 characters',
						MSG3: 'Only alphanumeric values are allowed with whitespace, % and $',
						MSG4: 'End date cannot be before start date',
						MSG5: 'Please enter valid campaign start date',
						MSG6: 'Please enter valid campaign end date',
						MSG7: 'Please enter valid campaign start date and end date',
						MSG8: 'Campaign start date is required',
						MSG9: 'Campaign end date is required',
					}
				}
			},
			STEP5: {
				LABEL: 'Campaign summary',
				DESC: 'Review and submit',
				FORMHEADER: 'Review your new campaign and submit',
				CAMPAIGNTYPE: {
					LABEL: 'Campaign type',
					AMOUNT: 'Amount Spent',
					EVENT: 'Special Days',
					FREQUENCY: 'Number Of Visits',
					LUCKY: 'Lucky visitor'
				},
				CRITERIA: {
					LABEL: 'Campaign trigger',
					CUSTNUMBEROFVISITS: 'Customer number of visits must be:',
					MINPURCHASEAMT: 'Minimum purchase amount : ',
					MAXPURCHASEAMT: 'Maximum purchase amount : '
				},
				THEREWARD: {
					LABEL: 'Campaign reward',
					TYPE: 'Type :',
					AMOUNT: 'Amount :',
					ENJOYABLE: 'Enjoyable :',
					FIXEDVALUE: 'Fixed Value',
					PERC: 'Percentage',
					INSTANT: 'Instant',
					NEXTVISIT: 'On Next Visit'
				},
				CAMPAIGNDETAIL: {
					LABEL: 'Campaign identity',
					NAME: 'Name :',
					FROM: 'From :',
					TO:'to',
				}
			},
			WIZARDBUTTONS: {
				PREVIOUS: 'Previous',
				SUBMIT: 'Submit',
				NEXTSTEP: 'Next'
			},
			STEP_SEGMENTATION:{
				TITLE:'Campaign Segmentation',
				DESC:'Who is targeted by the campaign ?',
				CRITERIA_DESC:'The campaign will be triggered for customers who match all the criteria below',
				SELECTED:'Selected',
				SEGMENTATION:'Segmentation',
				REVIEW_DESC:'Targeted customers',
				NO_SEGMENTATION_DESC:'No segmentation defined',
				ERROR_MAXIMUM_FILTER:'The maximum number of segmentation criteria has been reached',
				ATTRIBUTES:{
					ACCOUNT_ATTRIBUTES:'Account Attributes',
					PRODUCT_ATTRIBUTES:'Product Attributes',
					TRANSACTION_ATTRIBUTES:'Transaction Attributes'
				}
			},
			STEP_CAPPING: {
				LABEL: 'Campaign Capping',
				DESC: 'Which capping is applied',
				FORM_HEADER: 'Cap the rewards',
				NEXT_VISIT_SCENARIO_DISCOUNT_TITLE:'Scenario capping for next visit discount',
				NEXT_VISIT_SCENARIO__DISCOUNT_DESC:'Define the number of rewards distributed in each scenario',
				INSTANT_DISCOUNT_TITLE:'Campaign capping for instant discount',
				GLOBAL_CAPPING_DESC:'Define a global budget for the campaign',
				POOL_AWARD_TITLE: 'Campaign capping for pool rewards',
				VISITS:'visits',
				SPENT:'spent',
				MAX_NUMBER_OF_AWARDS:'Max number of awards',
				CAPPING_BUDGET:'Campaign budget',
				PLACE_HOLDER:{
					BUDGET:'Campaign budget',
					REWARDS:'Rewards(s)'
				},
				ERRORS:{
					NEXT_VISIT_CAPPING: 'Value should be in 1 to 99999999',
					INSTANT_CAPPING: 'Value should be in 0.01 to 999999.99'
				},
			},

			STEP_DETAILS:{
				ERRORS:{
					START_DATE_REQUIRED: 'Campaign start date is required',
					END_DATE_REQUIRED: 'Campaign end date is required',
				},
			},

		},
		STATISTICS:{
			TRANSACTIONSKPI:{
				BREADCRUMB:{
					STRING1:'Statistics',
					STRING2:'KPI transactions'
				},
				DATE:'Date',
				SELECTDATE:'Select a date',				
				FILTERDATE: '{{month}} {{day}}, {{year}}',
				MERCHANT:{
					VISITS:'Visits',
					TOTALNUMBEROFVISITS:'Total number of visits for the day',
					VISITORS:'Visitors',
					NUMBEROFUNIQUECUSTOMERS:'Number of unique visitors for the day',
					REVENUE:'Spending',
					TOTALREVENUEFORPERIOD:'Spending for the day',
					MAXSPENT:'Maximum spent',
					HIGHBASKETVALUE:'Highest ticket size for the day',
					AVESPENT:'Average spent',
					AVGBASKETVALUE:'Average ticket size for the day',
					MINSPENT:'Minimum spent',
					MINBASKETVALUE:'Lowest ticket size for the day',
				},
				CORPORATE:{
					VISITS:'Overall visits',
					TOTALNUMBEROFVISITS:'Total number of visits for the day in the network',
					VISITORS:'Overall visitors',
					NUMBEROFUNIQUECUSTOMERS:'Total number of unique visitors for the day in the network',
					REVENUE:'Overall spending',
					TOTALREVENUEFORPERIOD:'Total spending for the day in the network',
					MAXSPENT:'Maximum spent',
					HIGHBASKETVALUE:'Highest ticket size for the day in the network',
					AVESPENT:'Average spent',
					AVGBASKETVALUE:'Average ticket size for the day in the network',
					MINSPENT:'Minimum spent',
					MINBASKETVALUE:'Lowest ticket size for the day in the network',
					MERCHANTSTATISTICSTABLE:{
						TITLE:'Merchant statistics',
						DESC:'This table provides general indicators for your network split for each of the selected merchants',
						COLUMNS:{
							NAME:'Name',
							VISITS:'Visits',
							VISITORS:'Visitors',
							REVENUE: 'Spending',
							MAXSPENT:'Max. Spent',
							AVGSPENT:'Avg. Spent',
							MINSPENT:'Min. Spent'
						},
						NOMERCHANTSELECTED:'No merchant seleted'
					}
				}
			},
			CAMPAIGNSKPI:{
				BREADCRUMB:{
					STRING1:'Statistics',
					STRING2:'KPI campaigns'
				},
				FILTERS: {
					CAMPAIGN: 'Campaign',
					SELECTED_CAMPAIGN: 'Selected campaign',
					MERCHANT: 'Merchant',
					SELECTED_MERCHANT: 'Selected merchant(s)'
				},
				MERCHANT_TABLE: {
					TITLE:'Client spending',
					DESC:'Total incoming client spending during the campaign',
					AMOUNT_OF_DISCOUNTS:'Amount of discounts',
					DESC_DISCOUNTS:'Total amount of instant discounts given by the campaign',
					NUMBER_OF_COUPONS:'Number of coupons',
					DESC_COUPONS:'Total number of coupons given by the campaign',
					VISITS:'Visits',
					TOTAL_NUMBER_OF_BASKETS:'Total number of visits during the campaign',
					POOL:'Pool',
					DESC_POOL:'Total quantity of pool units given by the campaign'
				},
				CORPORATE_TABLE: {
					TITLE: 'Campaign statistics',
					DESC: 'This table provides campaign indicators for the selected campaign split for each of the selected merchants',
					NO_CAMPAIGN_MERCHANT_SELECTED: 'No campaign and merchant selected',
					NO_MERCHANT_SELECTED: 'No merchant selected',
					COLUMNS: {
						NAME: 'Merchant Name',
						REVENUE: 'Client Spending',
						DISCOUNT: 'Discounts',
						COUPONS: 'Coupons',
						VISITS: 'Visits',
						POOL:'Pool',
					}
				}
			},
			TRANSACTIONSREPORT:{
				BREADCRUMB:{
					STRING1:'Statistics',
					STRING2:'Reports',
					STRING3:'Transactions'
				},
				BUTTON:{
					TWELVEMONTH:'Last 12 months',
					CURRENTMONTH:'Current month'
				},
				MERCHANT:{
					CHART:{
						CURRENTMONTHTITLE:'Transaction volume - Current month',
						CURRENTMONTHDESC:'Total number of transactions per day',
						TWELVEMONTHTITLE:'Transaction volume - Last 12 months',
						TWELVEMONTHDESC:'Total number of transactions per month'
					}
				},
				CORPORATE:{
					CHART:{
						CURRENTMONTHTITLE:'Transaction volume - Current month',
						CURRENTMONTHDESC:'Total number of transactions per day',
						TWELVEMONTHTITLE:'Overall transaction volume',
						TWELVEMONTHDESC:'Total number of transactions per month'
					},
					MERCHANTCHART:{
						CURRENTMONTHTITLE:'Transaction volume - Current month for selected merchants',
						CURRENTMONTHDESC:'Total number of transactions per day for selected merchants',
						TWELVEMONTHTITLE:'Merchant(s) transaction volume',
						TWELVEMONTHDESC:'Aggregated number of transactions per month from selected merchants',
						NOMERCHANTSELECTED:'No merchants selected'
					},
					FILTER:{
						MERCHANT:'Merchant',
						SELECTEDMERCHANTS:'Selected Merchants(s)'
					}
				}
			},
			REVENUEREPORT:{
				BREADCRUMB:{
					STRING1:'Statistics',
					STRING2:'Reports',
					STRING3:'Revenue'
				},
				BUTTON:{
					TWELVEMONTH:'Last 12 months',
					CURRENTMONTH:'Current month'
				},
				MERCHANT:{
					CHART:{
						CURRENTMONTHTITLE:'Total revenue - Current month',
						CURRENTMONTHDESC:'Total revenue per day',
						TWELVEMONTHTITLE:'Total revenue - Last 12 months',
						TWELVEMONTHDESC:'Total revenue per month'
					}
				},
				CORPORATE:{
					CHART:{
						CURRENTMONTHTITLE:'Transaction volume - Current month',
						CURRENTMONTHDESC:'Total number of transactions per day',
						TWELVEMONTHTITLE:'Overall Revenues',
						TWELVEMONTHDESC:'Total revenue per month'
					},
					MERCHANTCHART:{
						CURRENTMONTHTITLE:'Transaction volume - Current month for selected merchants',
						CURRENTMONTHDESC:'Total number of transactions per day for selected merchants',
						TWELVEMONTHTITLE:'Merchant(s) total revenue',
						TWELVEMONTHDESC:'Aggregated revenue per month from selected merchants',
						NOMERCHANTSELECTED:'No merchants selected'			
					},
					FILTER:{
						MERCHANT:'Merchant',
						SELECTEDMERCHANTS:'Selected Merchants(s)',
						PLACEHOLDER:'Search Merchant'
					}
				}
			}
		},
		COMMONCOMPONENTS:{
			CHECKBOXLIST:{
				CHECKUNCHECKALL:'Check / Uncheck all',
				PLACEHOLDER:'Search'
			},
			DUALLISTBOX:{
				ADDBUTTON:'Add',
				ADDALLBUTTON:'Add all',
				REMOVEBUTTON:'Remove',
				REMOVEALLBUTTON:'Remove all'
			},
			SEGMENTATION:{
				EVALUATE_AUDIENCE:'Evaluate audience',
				CUSTOMERS:'customers',
				EVALUATE_DESCRIPTION:'This is the total number of customers potentially eligible to this campaign at this exact moment. This number is constantly evolving and therefore is not guaranteed. '
			},
		},
		TOASTER:{
			HOMEPAGE:{
				POST_STAT_FAILED:'An error occured. Please refresh the page or contact your administrator'
			},
			CAMPAIGNS:{GET_CAMPAIGN_BY_ID_FAILED:'An error occured when trying to retrieve your campaign information. Please retry or contact your administrator.',
				GET_CAMPAIGNS_FAILED_CPG_LIST:'An error occured when retrieving your campaigns. Please refresh the page or contact your administrator.',
				GET_ACCOUNTS_ACCOUNT_FAILED_CPG_CRT:'An error occured when trying to compute the audience of your campaign. Please retry or contact your administrator.',
				GET_ACCOUNTS_ACCOUNT_FAILED_CPG_SEG:'An error occured when trying to retrieve the audience of your campaign. Please retry or contact your administrator',
				GET_CAMPAIGNS_FAILED_CPG_SEL:'An error occured when trying to retrieve the list of your campaigns. Please refresh the page or contact your administrator.',
				GET_CORP_MERC_FAILED:'An error occured when trying to retrieve the members of your network. Please refresh the page or contact your administrator',				
				
				POST_CAMP_SUB_UNSUB_FAILED:'An error occured when trying to update the subscription of the merchants. Please retry or contact your administrator.',
				POST_CAMP_SUB_UNSUB_SUCCESS:' Your campaign {{campaignName}} has been successfuly updated.',
				POST_CAMP_STAT_FAILED:'An error occured when trying to retrieve the KPIs of the selected campaign. Please retry or contact your administrator',
				POST_CORP_MERC_FAILED:'An error occured when trying to retrieve the members of your network. Please refresh the page or contact your administrator',
				POST_CORP_MERC_STAT_FAILED_KPI:'An error occured when trying to retrieve the statistics of your transactions. Please refresh the page or contact your administrator.',
				POST_CORP_MERC_STAT_FAILED_RPT:'An error occured when trying to build your report. Please refresh the page or contact your administrator.',
				
				DELETE_CAMPAIGN_FAILED:'An error occured when trying to delete your campaign. Please retry or contact your administrator.',
				DELETE_CAMPAIGN_SUCCESS:'Your campaign {{campaignName}} has been deleted'
			}
		}
	}
};
