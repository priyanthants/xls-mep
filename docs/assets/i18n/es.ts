// Spain
export const locale = {
	lang: 'es',
	data: {
		TRANSLATOR: {
			SELECT: 'Elige tu idioma',
			DASHBOARD: 'Tablero',
			ERROR: 'Error',
			SAVE: 'Guardar',
			CANCEL: 'Cancelar',
			OK: 'Okay',
			HI: 'Hola',
			DELETE: 'Eliminar',
			CONFIRM: "Confirmar",
			CLOSE: 'Cerrar',
			ERROR_MESSAGE: 'Algo salió mal'

		},
		MENU: {
			NEW: 'Nuevo',
			ACTIONS: 'Acciones',
			CREATE_POST: 'Crear nueva publicación',
			PAGES: 'Páginas',
			FEATURES: 'Caracteristicas',
			APPS: 'Aplicaciones',
			HOME: 'Inicio',
			CAMPAIGNS: 'Campañas',
			STATISTICS: {
				BASE: 'Estadística',
				KPICAMPAIGNS: 'Indicadores clave Campañas',
				KPITRANSACTIONS: 'Indicadores clave Transacciones',
				REPORTS: {
					BASE: 'Informes',
					TRANSACTIONS: 'Transacciones',
					REVENUE: 'Ingresos'
				}

			},
		},
		FOOTER: {
			AUTHER: {
				NAME: 'Collinson-es'
			},
			ABOUT: {
				NAME: 'Acerca de',
				DIALOG:{
					DESC:`Este portal de comercialización para comerciantes es accesible para los comerciantes que 
					desean crear sus propias promociones por sí mismos, así como para ver informes e indicadores clave sobre sus iniciativas de lealtad.`,
					VERSION:'Version {{version}}',
					RELEASE:'Release {{release}}',
					EDITOR : 'Editor {{editor}}'
				}
			},
			PRIVACY: {
				NAME: 'Privacidad',
				URL: 'privacy_es.pdf'
			},
			TC: {
				NAME: 'T y C',
				URL: 'tc_es.pdf'
			},
			FAQ: {
				NAME: 'FAQ',
				URL: 'FAQ - Merchant_Engagement_Portal_es.pdf'
			}
		},
		HOME: {
			MERCHANT_STATS: {
				TODAY: 'Hoy',
				TRANSACTIONS: {
					LABEL: 'Transacciones',
					DESC: 'Transacciones de hoy',
				},
				REVENUE: {
					LABEL: 'Ingresos',
					DESC: 'Ingresos de hoy',
				},
				AVERAGE_PURCHASE: {
					LABEL: 'Compra promedio',
					DESC: 'Monto promedio de transacción de hoy',
				}
			}
		},
		LANDING:{
			WELCOME:'Bienvenido!',
			SELECTYOURLANGUAGE :'Seleccione su idioma',
			SIGNIN :'Entra',

		},
		PROFILE:{
			BREADCRUMB:{
				MY_PROFILE:'Mi perfil'
			},
			TABS:{
				INFORMATION:{
					TAB_HEADER:'Información',
					LOGO:'Logo',
					NUMBER:'Número',
					NAME:'Apellido',
					ADDRESS:'Dirección'
				},
				CONTACT:{
					TAB_HEADER:'Contacto',
					NAME:'Apellido',
					EMAIL:'Email',
					PHONE_NUMBER:'Número de teléfono',
					FAX_NUMBER:'Número de fax'
				}
			},
			MODAL:{
				MY_PROFILE:'Mi perfil',
				SIGNOUT:'Desconectar'
			}
		},
		CAMPAIGNS: {
			LIST: {
				TITLE: 'Lista de sus campañas',
				STATUS: {
					LABLE: 'Estado',
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
					LABLE: 'Tipo',
					ALL: 'All',
					FREQUENCY: 'Frequency',
					MONETARY: 'Cantidad monetaria',
					RECURRING: ' Recurrente'
				},
				SEARCH: 'Buscar',
				CREATE_NEW: 'Crear nuevo',
				CREATE_NEW_DISABLED: 'No puedes crear nuevas campañas. Por favor, póngase en contacto con su administrador',
				ID: 'Id',
				NAME: 'Nombre',
				AWARD: 'Recompensa',
				START_DATE: 'Fecha inicio',
				END_DATE: 'Fecha fin',
				LAST_UPDATED_DATE: 'Fecha actualización',
				OWNER: 'Nuestra creación',
				ACTIONS: 'Acciones',
			},
			DELETE: {
				CONFIRM_MSG: '¿Estás seguro de que deseas eliminar esta campaña? Esta acción es irreversible.',
				CAMPAIGN_NAME: 'Nombre de la campaña: ',
			},
			VIEW: {
				FREQUENCY_DESC: 'Una campaña de frecuencia premia a cada uno de sus clientes después de que visiten sus tiendas un número predeterminado de veces.',
				SPECIAL_DAY_DESC: 'Una campaña de Día Especiales premia a cada uno de sus clientes solo en los días seleccionados.',
				AMOUNT_DESC: 'Una campaña de Cantidad premia a cada uno de sus clientes después de que gastan en sus tiendas una cantidad acumulada predefinida.',
				LUCKY_DESC: 'La campaña Lucky recompensa a un solo cliente por enésima visita por grupo de clientes.',
				TABS:{
					DETAILS:{
						TITLE: 'Detalles',
						CRITERIA: 'Criterios',
						REWARDS: 'Recompensas',
						VALIDITY: 'Validez',
						PURCHASE_AMOUNT: 'Monto de la compra',
						INFORMATION: 'Información',
						MINIMUM: 'Mínimo',
						MAXIMUM: 'Máximo',
						ENJOYABLE: 'Usable',
						TYPE: 'Typo',
						START: 'Inicio',
						END: 'Fin',
						UPDATED: 'Actualizada',
						OWNER: 'Creada por',
						FREQUENCY_REWARD_DESC: 'Número de visitas a recompensar',
						LUCKY_REWARD_DESC: 'Cantidad acumulada de visitas colectivas de todos los clientes necesarias para activar la campaña',
						MESSAGE_FROM_ADMIN: 'Mensaje del administrador',
						NETWORK:'Red',
						CAPPING:'Límite',
						POOL:'Fondo',
						POOL_CAPPING:'Limite de fondo',
					},
					SEGMENTATION:{
						TITLE:'Segmentación de la campaña',
						DESC:'Esta campaña se activará para los clientes que tienen todos los criterios a continuación.',
						SUB_DESC:'Si un criterio de segmentación tiene varios valores elegidos, los clientes elegibles deben tener al menos uno de los valores.',
					},
					NETWORK:{
						TITLE:'Red',
						AVAILABLEMERCHANTS:'Comerciantes a listar',
						SELECTEDMERCHANTS:'Comerciantes seleccionados',
						FILTERPLACEHOLDER:'Buscar un comerciante',
						UPDATEBUTTON:'Actualizar',
						MESSAGES:{
							REWARD:{
								SUBSCRIPTIONSUCCESS:'La asignación de la recompensa fue exitosa!',
								SUBSCRIPTIONUNSUCCESS:'La asignación de la recompensa falló!',
								UNSUBSCRIPTIONSUCCESS:'La desasignación de la recompensa fue exitosa!',
								UNSUBSCRIPTIONUNSUCCESS:'La desasignación de la recompensa falló!',
							},
							CAMPAIGN:{
								SUBSCRIPTIONSUCCESS:'La asignación de la campaña fue exitosa!',
								SUBSCRIPTIONUNSUCCESS:'La asignación de la campaña falló!',
								UNSUBSCRIPTIONSUCCESS:'La desasignación de la campaña fue exitosa!',
								UNSUBSCRIPTIONUNSUCCESS:'La desasignación de la campaña falló!',
							},
							COMMON:{
								SUCCESS:'Éxito',
								ERROR:'Error'
							}
						},
						UN_SAVED_ASSIGNMENTS:{
							TITLE:'Asignación no guardada',
							MESSAGE:`La lista de comerciantes a asignar se ha modificado pero no se ha guardado.
Al continuar, todos los cambios se perderán.

¿Desea continuar, salir de la página Red y perder todos sus cambios?`	,
							YES_BUTTON:'Sí',
							NO_BUTTON:'No'
						}
					}
				}
			}
		},
		SETTING: {
			TITLE: 'Configuraciones',
			DESC: 'Esta configuración se utiliza para conectar el portal al sistema Realtime-XLS en versión de desarollo.',
			MERCHANT: {
				TITLE: 'Comerciante',
				MERCHANT_NUMBER: 'Numero de comerciante',
				REQUIRED_ERROR: 'Se requiere el número de comerciante',
				VALID_ERROR: 'Por favor ingrese un número de comerciante válido'
			},
			CORPORATE: {
				TITLE: 'Corporativo',
				CORPORATE_NUMBER: 'Numero Corporativo',
				REQUIRED_ERROR: 'Se requiere un número corporativo',
				VALID_ERROR: 'Por favor ingrese un número corporativo válido'
			},
			CHECKERMAKER:{
				CHECKER:'Inspector',
				NOCHECKER:'Sin corrector'
			},
			AUTOREDEMPTION:{
				AUTO_REDEM:'Ecpn-Auto-Redeem',
				MANUAL_REDEM:'Ecpn-Manu-Redeem'
			},
			API: {
				TITLE: 'API',
				CAMPAIGN_API: 'APIs Campaña',
				MERCHANT_API: 'APIs Comerciante',
				ACCOUNT_API:'Account APIs',
				ROOT_URL: 'URL raíz',
				BASIC_KEY: 'Clave básica',
				ROOT_URL_PLACEHOLDER: 'http://server:port/version',
				CAMPAIGN_URL_REQUIRED_ERROR: 'Se requiere una URL base de Campañas',
				CAMPAIGN_URL_VALID_ERROR: 'Favor de ingresar una URL base de Campañas válida',
				CAMPAIGN_KEY_REQUIRED_ERROR: 'Se requiere la clave base de Campañas',
				CAMPAIGN_KEY_VALID_ERROR: 'Favor de ingresar una clave base de Campañas valida',
				MERCHANT_URL_REQUIRED_ERROR: 'Se requiere una URL base de Comerciantes',
				MERCHANT_URL_VALID_ERROR: 'Favor de ingresar una URL base de Comerciantes válida',
				MERCHANT_KEY_REQUIRED_ERROR: 'Se requiere la clave base de Comerciantes',
				MERCHANT_KEY_VALID_ERROR: 'Favor de ingresar una clave base de Comerciantes válida',
				ACCOUNT_URL_REQUIRED_ERROR: 'Account Base Url is required',
				ACCOUNT_URL_VALID_ERROR: 'Please enter a valid Account Base Url',
				ACCOUNT_KEY_REQUIRED_ERROR: 'Account Base Key is required',
				ACCOUNT_KEY_VALID_ERROR: 'Please enter a valid Account Base Key'
			},
			MISCELLANEOUS: {
				TITLE: 'Varios',
				PAYMENT_CURRENCY: 'Moneda de pago',
				CURRECNCY_PLACEHOLDER: 'Moneda (ejemplo: $)',
				REQUIRED_ERROR: 'Se requiere la moneda de pago',
				VALID_ERROR: 'Favor de ingresar una moneda de pago valida'
			},
			SAVE: 'Guardar',
			CANCEL: 'Cancelar',
			ERROR: {
				MERCHANT:'No se pudo recuperar el ID de comerciante utilizando el número de comerciante : ',
				CORPORATE:'No se pudo recuperar el Corporate desde el número de Corprate:'
			}
		},
		CALENDAR: {
			MONTHS: {
				JAN: 'Enero',
				FEB: 'Febrero',
				MAR: 'Marzo',
				APR: 'Abril',
				MAY: 'Mayo',
				JUN: 'Junio',
				JUL: 'Julio',
				AUG: 'Agosto',
				SEP: 'Septiembre',
				OCT: 'Octubre',
				NOV: 'Noviembre',
				DEC: 'Diciembre'
			},
			SHORTMONTHS: {
				JAN: 'Ene',
				FEB: 'Feb',
				MAR: 'Mar',
				APR: 'Abr',
				MAY: 'May',
				JUN: 'Jun',
				JUL: 'Jul',
				AUG: 'Ago',
				SEP: 'Septiembre',
				OCT: 'Oct',
				NOV: 'Nov',
				DEC: 'Dic'
			}
		},
		CREATECAMPAIGN: {
			BREADCRUMB: {
				CAMPAIGN: 'Campañas',
				CREATECAMPAIGN: 'Crear nuevo'
			},
			STEP1: {
				LABEL: 'Tipo de campaña',
				DESC: 'Elija qué campaña crear',
				FORMHEADER: 'Elige el tipo de campaña',
				CAMPAIGNTYPE: {
					SPECIALDAYS: {
						LABEL: 'Días especiales',
						DESC: 'Recompensa por días especiales'
					},
					AMOUNTSPENT: {
						LABEL: 'Cantidad gastada',
						DESC: 'Recompensa relacionada con la cantidad gastada'
					},
					VISITS: {
						LABEL: 'Cantidad de visitas',
						DESC: 'Recompensa relacionada con la cantidad de visitas'
					},
					LUCKYDAYS: {
						LABEL: 'Visitante afortunado',
						DESC: 'Recompensa basada en un número colectivo de visitas'
					},
					RECURRING: {
						LABEL: 'Días / horas recurrentes',
						DESC: 'Recompensa en días y horarios regulares'
					}
				} 
			},
			STEP2: {
				LABEL: 'Criterios de activación de campaña',
				DESC: 'Seleccione los criterios de activación',
				FORMHEADER: 'Establecer los criterios de activación',
				SUBHEADER:'Escenarios',
				CUSTOMERMUSTVISIT: 'El cliente será recompensado cada vez que se alcance el número configurado de visitas (con un máximo de 4 escenarios):',
				TIMESTOBEREWARDED: 'Cada tarjeta representa un escenario e indica el número total de visitas desde la primera visita que debe alcanzarse para ser recompensado. Haga clic en la tarjeta para eliminarla.',
				AND: 'Y',
				CUSTOMERAMOUNTSPENT: ' Se recompensará a un cliente cada vez que se alcance el monto acumulado configurado (con un máximo de cuatro escenarios)',
				CUSTOMERAMOUNTSPENTSCENARIODESC: 'Cada tarjeta indica la cantidad total para acumular deps Cada tarjeta indica la cantidad total desde la primera visita que debe alcanzarse para ser recompensado. Haga clic en una tarjeta para eliminarla',
				PURCHASEAMOUNTMUST: 'El monto de la compra debe estar entre:',
				CONFIRMMESSAGEHEADER: `Está modificando los criterios de campaña cuando ya ha configurado las recompensas de campaña. Todas las recompensas configuradas serán eliminadas.`,
				CONFIRMMESSAGE: `¿Te gustaría continuar?`,
				PLACEHOLDERS: {
					MINIMUM: 'Mínimo',
					MAXIMUM: 'Máximo'
				},
				ERRORS: {
					NUMBEROFVISISTS: {
						MSG1: 'Se requiere el número de visitas',
						MSG2: 'Por favor ingrese más de 0 visitas',
						MSG3: 'Por favor ingrese menos de 999 visitas',
						MSG4: 'No se autoriza un número fraccionario de visitas.',
						MSG5: 'Este número de visitas ya está configurado'
					},
					AMOUNTSPENT:{
						MSG1: 'Se requiere el valor de la cantidad', 
						MSG2: 'El valor de la cantidad debe estar entre 0.01 y 999999.99', 
						MSG3: 'El valor de la cantidad ya está configurado'						
					},
					MINPURCHASEAMT: {
						MSG1: 'Se requiere un monto mínimo de compra',
						MSG2: 'La compra mínima no puede ser superior a 9999999.99',
						MSG3: 'El monto mínimo de compra no puede ser inferior a 0',
						MSG4: 'El monto mínimo de compra no puede ser superior a 9999999.99'
					},
					MAXPURCHASEAMT: {
						MSG1: 'Se requiere el monto máximo de compra',
						MSG2: 'La compra máxima no puede ser más de 9999999.99',
						MSG3: 'La compra máxima no puede ser inferior a la cantidad mínima',
						MSG4: 'La compra máxima no puede ser inferior a la cantidad mínima {{minAmt}}'
					}
				},
				LUCKYVISIT: 'Se recompensará a un solo cliente cada vez que todos alcancen colectivamente el número de visitas configuradas (con un máximo de 4 escenarios):',
				LUCKYTIMETOREWARD: 'Cada tarjeta indica el número total acumulado de visitas colectivas desde la primera visita que debe alcanzarse para ser recompensado. Haga clic en una tarjeta para eliminarla.',
				RECURRINGDAY:{
					DESC: ' Los tres desencadenantes son acumulativos',
					EXAMPLE: 'Por ejemplo, si elige << Día del mes 2 + y día de la semana lunes >>, el cliente es recompensado todos los lunes 2 de cada mes',
					DAYOFMONTH: 'Día del mes',
					MONTHDESC: 'Elija hasta 2 días en el mes:',
					DAY: 'Día',
					DAYOFWEEK: 'Día de la semana',
					WEEKDESC: 'Seleccione los días de la semana',
					DAILYHOURS: 'Intervalos de tiempo',
					HOURSDESC: 'Seleccione el rango de tiempo',
					MONDAY: 'Lunes',
					TUESDAY: 'Martes',
					WEDNESDAY: 'Miércoles',
					THURSDAY: 'Jueves',
					FRIDAY: 'Viernes',
					SATURDAY: 'Sábado',
					SUNDAY: 'Domingo',
					STARTTIME: 'Hora de inicio:',
					ENDTIME: 'Hora de fin:',
					HOUR: 'Hora',
					MINUTES: 'Minutos'
				}
			},
			STEP3: {
				LABEL: 'Recompensa de campaña',
				DESC: 'Elige la recompensa del cliente',
				FORMHEADER: 'Establecer la recompensa',
				REWARDYOURCUST: 'Recompense a su cliente con:',
				PERCTILELABEL: 'Porcentaje',
				PERCTILEDESC: 'La recompensa es un porcentaje de la cantidad gastada',
				INSTANTDISCOUNT: 'Descuento inmediato',
				INSTANTDISCOUNTDESC: `Esta recompensa reduce instantáneamente el monto de compra del cliente.`,
				NEXTVISITDISCOUNT: `Descuento próxima visita`,
				NEXTVISITDISCOUNTDESC: `Esta recompensa reduce el monto de compra del cliente en la próxima visita.`,
				POOLAWARD: 'Fondo',
				POOLAWARDDESC: `Esta recompensa permite al cliente acumular puntos o devolución de efectivo.`,
				FIXEDVALUELABEL: 'Valor fijo',
				FIXEDVALUEDESC: 'El valor no depende de la cantidad gastada',
				ENJOYABLE: 'Utilizable:',
				INSTANTLY: 'Al instante',
				ONNEXTVISIT: 'En la proxima visita',
				WHENTOREDEEMAWARD: 'Elija cuándo se puede usar la recompensa',
				CAPPING:'Límite',
				INSTANT_CAPPING_DESC:'Establecer un presupuesto de recompensas (descuentos inmediatos)',
				NEXT_VISIT_CAPPING_DESC:'Establecer la cantidad de recompensas que se distribuirán (cantidad de cupones de descuento en la próxima visita)',
				EVERY: 'Cada',
				SPENT: 'Gastada',
				PLACEHOLDERS: {
					VALUEOFREWARD: 'Valor de la recompensa',
					ONEVERYSPENT: 'El monto gastado',
					REWARD_BUDGET:'Presupuesto limitado para recompensas inmediatas',
					REWARDS:'Número limitado de cupones de descuento para la próxima visita'
				},
				ERRORS: {
					SCENARIO:{
						INVALID:`Favor de configurar todos los escenarios creados para acceder a los siguientes pasos en la creación de la campaña.`,
						INVALIDREWARDSTEP:`La lista de recompensas no está configurada correctamente. Favor de configurar todas las recompensas antes de continuar con los siguientes pasos.`,
						NOREWARDERROR:'No hay opciones de tipo de recompensa disponible, favor de comunicarse con su administrador.'
					},
					VALUEOFREWARD: {
						MSG1: 'Se requiere el valor de la recompensa',
						MSG2: '% debe estar en 0.01 a 100',
						MSG3: 'El valor debe estar en 0.01 a 9999999.99',
						MSG4: 'El valor debe estar entre 1 y 99999999'
					},
					VALUE_OF_REWARD_CAPPING:{
                        MSG1: 'El valor del límite es necesario',
						MSG2: 'El valor debe estar entre 1 y 99999999',
						MSG3: 'El valor debe estar entre 0.01 y 999999.99'
                    }
				}
			},
			STEP4: {
				LABEL: 'Identidad de la campaña',
				DESC: 'Definir nombre y duración de la campaña',
				FORMHEADER: 'Definición de campaña',
				NAMEOFPROMOTION: 'Nombre de la campaña',
				STARTDATE: 'Fecha de inicio',
				ENDDATE: 'Fecha de finalización',
				PLACEHOLDERS: {
					CAMPAIGNNAME: 'Escoge un nombre',
					CHOOSEDATE: 'Elige una fechae'
				},
				ERRORS: {
					CAMPAIGNNAME: {
						MSG1: 'Se requiere el nombre de la campaña.',
						MSG2: 'El nombre de Camapign no puede tener más de 24 caracteres.',
						MSG3: 'Solo se permiten valores alfanuméricos con espacios en blanco,% y $',
						MSG4: 'La fecha de finalización no puede ser anterior a la fecha de inicio',
						MSG5: 'Ingrese una fecha de inicio de campaña válida',
						MSG6: 'Ingrese una fecha de finalización de campaña válida',
						MSG7: 'Ingrese la fecha de inicio y finalización de campaña válida'
					}
				}
			},
			STEP5: {
				LABEL: 'Resumen de campaña',
				DESC: 'Revisar y enviar',
				FORMHEADER: 'Verifique su nueva campaña y envíela',
				CAMPAIGNTYPE: {
					LABEL: 'Tipo de campaña',
					TYPE: 'Cantidad de visitas'
				},
				CRITERIA: {
					LABEL: 'Criterio de activación de campaña',
					CUSTNUMBEROFVISITS: 'La cantidad de visitas del client debe ser:',
					MINPURCHASEAMT: 'Monto mínimo de compra : ',
					MAXPURCHASEAMT: 'Monto máximo de compra : '
				},
				THEREWARD: {
					LABEL: 'Recompensa de campaña',
					TYPE: 'Tipo :',
					AMOUNT: 'Monto :',
					ENJOYABLE: 'Utilizable :',
					FIXEDVALUE: 'Valor fijo',
					PERC: 'Porcentaje',
					INSTANT: 'Instante',
					NEXTVISIT: 'En la próxima visita'
				},
				CAMPAIGNDETAIL: {
					LABEL: 'Identidad de la campaña',
					NAME: 'Nombre :',
					FROM: 'Desde :',
					TO:'hasta el',
				}
			},
			WIZARDBUTTONS: {
				PREVIOUS: 'Anterior',
				SUBMIT: 'Enviar',
				NEXTSTEP: 'Próximo'
			},
			STEP_SEGMENTATION:{
				TITLE:'Segmentación de la campaña',
				DESC:'¿A quién va dirigido la campaña?',
				CRITERIA_DESC:'Esta campaña se activará para los clientes que tienen todos los criterios a continuación.',
				SELECTED:'Seleccionado',
				SEGMENTATION:'Segmentación',
				REVIEW_DESC:'Clientela objetivo',
				NO_SEGMENTATION_DESC:'Sin segmentación definida',
				ERROR_MAXIMUM_FILTER:'Se ha alcanzado el número máximo de criterios de segmentación',
				ATTRIBUTES:{
					ACCOUNT_ATTRIBUTES:'Atributos de clientes',
					PRODUCT_ATTRIBUTES:'Atributos de productos',
					TRANSACTION_ATTRIBUTES:'Atributos de transacciónes'
				}
			},
			STEP_CAPPING: {
				LABEL: 'Límite de la campaña',
				DESC: '¿Qué límite aplica?¿Qué límite aplica?',
				FORM_HEADER: 'Limitar las recompensas',
				NEXT_VISIT_SCENARIO_DISCOUNT_TITLE:'Presupuesto de recompensas proxima visita',
				NEXT_VISIT_SCENARIO__DISCOUNT_DESC:'Establecer la cantidad de cupones de descuento de próxima visita por scenario',
				INSTANT_DISCOUNT_TITLE:'Presupuesto de recompensas inmediatas',
				GLOBAL_CAPPING_DESC:'Establecer el presupuesto de descuentos inmediatos para la campaña',
				VISITS:'visitas',
				MAX_NUMBER_OF_AWARDS:'Número máximo de premios.',
				CAPPING_BUDGET:'Presupuesto de la campaña',
				PLACE_HOLDER:{
					BUDGET:'Presupuesto de la campaña',
					REWARDS:'Recompensa(s)'
				},
				ERRORS:{
					NEXT_VISIT_CAPPING: 'El valor debe estar entre 1 y 99999999',
					INSTANT_CAPPING: 'El valor debe estar entre 0.01 y 999999.99'
				},
			},
			STEP_DETAILS:{
				ERRORS:{
					START_DATE_REQUIRED: 'Se requiere la fecha de inicio de la campaña.',
					END_DATE_REQUIRED: 'Se requiere la fecha de finalización de la campaña.',
				},
			}
		},
		STATISTICS:{
			TRANSACTIONSKPI:{
				BREADCRUMB:{
					STRING1:'Estadísticas',
					STRING2:'Indicadores clave de transacciones'
				},
				DATE:'Fecha',
				SELECTDATE:'Seleccionar una fecha',				
				FILTERDATE: '{{month}} {{day}}, {{year}}',
				MERCHANT:{
					VISITS:'Visitas',
					TOTALNUMBEROFVISITS:'Número de visitas de clientes del día.',
					VISITORS:'Visitantes',
					NUMBEROFUNIQUECUSTOMERS:'Número de visitantes únicos del día',
					REVENUE:'Gastos clientes',
					TOTALREVENUEFORPERIOD:'Gasto total de clientes del día',
					MAXSPENT:'Compra máxima',
					HIGHBASKETVALUE:'Compra más alta del día',
					AVESPENT:'Compra promedia',
					AVGBASKETVALUE:'Compra promedia del día',
					MINSPENT:'Compra mínima',
					MINBASKETVALUE:'Compra más baja del día',
				},
				CORPORATE:{
					VISITS:'Visitas globales',
					TOTALNUMBEROFVISITS:'Número total de visitas de clientes del día en la red',
					VISITORS:'Visitantes globales',
					NUMBEROFUNIQUECUSTOMERS:'Número total de visitantes únicos del día en la red',
					REVENUE:'Gastos clientes globales',
					TOTALREVENUEFORPERIOD:'Gasto total de clientes del día en la red',
					MAXSPENT:'Compra máxima',
					HIGHBASKETVALUE:'Compra más alta del día en la red',
					AVESPENT:'Compra promedia',
					AVGBASKETVALUE:'Compra promedia del día en la red',
					MINSPENT:'Compra mínima',
					MINBASKETVALUE:'Compra más baja del día en la red',
					MERCHANTSTATISTICSTABLE:{
						TITLE:'Estadísticas commerciantes',
						DESC:'Esta tabla proporciona indicadores generales para su banner distribuidos para cada uno de los comerciantes seleccionados',
						COLUMNS:{
							NAME:'Nombre',
							VISITS:'Visitas',
							VISITORS:'Visitantes',
							REVENUE: 'Gastos clientes',
							MAXSPENT:'Compra Max.',
							AVGSPENT:'Compra Pro.',
							MINSPENT:'Compra Min.'
						},
						NOMERCHANTSELECTED:'Sin comerciante seleccionado'
					}
				}
			},
			CAMPAIGNSKPI:{
				BREADCRUMB:{
					STRING1:'Estadísticas',
					STRING2:'Indicadores clave campañas'
				},
				FILTERS:{
					CAMPAIGN:'Campaña',
					SELECTED_CAMPAIGN:'Campaña seleccionada',
					MERCHANT: 'Comerciante seleccionado',
					SELECTED_MERCHANT: 'Comerciante(s) seleccionado(s)'
				},
				MERCHANT_TABLE: {
					TITLE:'Gastos clientes',
					DESC:'Gasto total de los clientes durante la duración de la campaña',
					AMOUNT_OF_DISCOUNTS:'Monto de los descuentos',
					DESC_DISCOUNTS:'Monto total de descuentos emitidos por la campaña',
					NUMBER_OF_COUPONS:'Numero de cupones',
					DESC_COUPONS:'Número total de cupones emitidos por la campaña',
					VISITS:'Visitas',
					TOTAL_NUMBER_OF_BASKETS:'Número total de visitas durante la campaña',
					POOL:'Fondo',
					DESC_POOL:'Cantidad total de unidades de fondo donadas por la campaña',
				},
				CORPORATE_TABLE: {
					TITLE: 'Campañas estadísticas',
					DESC: 'Esta tabla proporciona indicadores para la campaña seleccionada para cada uno de los comerciantes seleccionados',
					NO_CAMPAIGN_MERCHANT_SELECTED: 'Sin campaña o comerciante seleccionado',
					NO_MERCHANT_SELECTED: 'Sin comerciante seleccionado',
					COLUMNS: {
						NAME: 'Nombre del comerciante',
						REVENUE: 'Gastos del cliente',
						DISCOUNT: 'Descuentos',
						COUPONS: 'Coupones',
						VISITS: 'Visitas',
						POOL:'Fondo',
					}
				}
			},
			TRANSACTIONSREPORT:{
				BREADCRUMB:{
					STRING1:'Estadísticas',
					STRING2:'Informes',
					STRING3:'Transacciones'
				},
				BUTTON:{
					TWELVEMONTH:'Últimos 12 meses',
					CURRENTMONTH:'Mes actual'
				},
				MERCHANT:{
					CHART:{
						CURRENTMONTHTITLE:'Volumen de transacciones - Mes actual',
						CURRENTMONTHDESC:'Número total de transacciones por día',
						TWELVEMONTHTITLE:'Volumen de transacciones - Últimos 12 meses',
						TWELVEMONTHDESC:'Número total de transacciones por mes'
					}
				},
				CORPORATE:{
					CHART:{
						CURRENTMONTHTITLE:'Volumen general de transacciones - Mes actual',
						CURRENTMONTHDESC:'Número total de transacciones por día en su red',
						TWELVEMONTHTITLE:'Volumen general de transacciones - Últimos 12 meses',
						TWELVEMONTHDESC:'Número total de transacciones por mes en su red'
					},
					MERCHANTCHART:{
						CURRENTMONTHTITLE:'Volumen de transacciones par commerçant - Mes actual',
						CURRENTMONTHDESC:'Número total de transacciones por día y por comerciante seleccionado',
						TWELVEMONTHTITLE:'Volumen de transacciones par commerçant - Últimos 12 meses',
						TWELVEMONTHDESC:'Número total de transacciones por mes y por comerciante seleccionado',
						NOMERCHANTSELECTED:'Sin comerciante seleccionado'
					},
					FILTER:{
						MERCHANT:'Comerciante',
						SELECTEDMERCHANTS:'Comerciante(s) seleccionado(s)'
					}
				}
			},
			REVENUEREPORT:{
				BREADCRUMB:{
					STRING1:'Estadísticas',
					STRING2:'Informes',
					STRING3:'Gastos'
				},
				BUTTON:{
					TWELVEMONTH:'Últimos 12 meses',
					CURRENTMONTH:'Mes actual'
				},
				MERCHANT:{
					CHART:{
						CURRENTMONTHTITLE:'Gastos clientes - Mes actual',
						CURRENTMONTHDESC:'Monto total de gastos de los clientes por día',
						TWELVEMONTHTITLE:'Gastos clientes - Últimos 12 meses',
						TWELVEMONTHDESC:'Monto total de gastos de los clientes por mes'
					}
				},
				CORPORATE:{
					CHART:{
						CURRENTMONTHTITLE:'Gastos generales de los clientes - Mes actual',
						CURRENTMONTHDESC:'Monto total de gastos de los clientes por día en su red',
						TWELVEMONTHTITLE:'Gastos generales del cliente - Últimos 12 meses',
						TWELVEMONTHDESC:'Monto total de gastos de los clientes por mes en su red'
					},
					MERCHANTCHART:{
						CURRENTMONTHTITLE:'Gastos clientes por comerciante - Mes actual',
						CURRENTMONTHDESC:'Monto total de gastos de los clientes por día y por comerciante seleccionado',
						TWELVEMONTHTITLE:'Gastos clientes por comerciante - Últimos 12 meses',
						TWELVEMONTHDESC:'Monto total de gastos de los clientes por mes y por comerciante seleccionado',
						NOMERCHANTSELECTED:'Sin comerciante seleccionado'			
					},
					FILTER:{
						MERCHANT:'Comerciante',
						SELECTEDMERCHANTS:'Comerciante(s) seleccionado(s)'
					}
				}
			}
		},
		COMMONCOMPONENTS:{
			CHECKBOXLIST:{
				CHECKUNCHECKALL:'Marque / Desmarque todos',
				PLACEHOLDER:'Buscar'
			},
			DUALLISTBOX:{
				ADDBUTTON:'Añadir',
				ADDALLBUTTON:'Añadir todos',
				REMOVEBUTTON:'Retirar',
				REMOVEALLBUTTON:'Retirar todos'
			},
			SEGMENTATION:{
				EVALUATE_AUDIENCE:'Evaluar a la audiencia',
				CUSTOMERS:'clientes',
				EVALUATE_DESCRIPTION:'Este es el número total de clientes potencialmente elegibles para esta campaña en este momento. Este número cambia constantemente y no se puede garantizar.'
			},
		},
		TOASTER:{
			HOMEPAGE:{
				POST_STAT_FAILED:'Ocurrió un error. Por favor, actualiza la página o ponte en contacto con tu administrador'
			},
			CAMPAIGNS:{
				GET_CAMPAIGN_BY_ID_FAILED:'Se produjo un error al intentar recuperar las informaciónes de su campaña. Por favor, vuelve a intentarlo o ponte en contacto con tu administrador.',
				GET_CAMPAIGNS_FAILED_CPG_LIST:'Se produjo un error al recuperar sus campañas. Por favor, actualiza la página o ponte en contacto con tu administrador',
				GET_ACCOUNTS_ACCOUNT_FAILED_CPG_CRT:'Se produjo un error al tratar de recuperar la audiencia de su campaña. Por favor, vuelva a intentarlo o contacte con su administrador.',
				GET_ACCOUNTS_ACCOUNT_FAILED_CPG_SEG:'Se produjo un error al tratar de recuperar la audiencia de su campaña. Por favor, vuelva a intentarlo o contacte con su administrador.',
				GET_CAMPAIGNS_FAILED_CPG_SEL:'Erreur lors de la récupération de vos campagnes. Actualisez la page ou contactez votre administrateur s’il vous plait.',
				GET_CORP_MERC_FAILED:'Se produjo un error al intentar recuperar los miembros de su organización. Por favor, actualice la página o contacte con su administrador.',
				
				POST_CAMP_SUB_UNSUB_FAILED:'Se produjo un error al tratar de actualizar la suscripción de los comerciantes. Por favor, vuelva a intentarlo o contacte con su administrador.',
				POST_CAMP_SUB_UNSUB_SUCCESS:'Su campaña {{campaignName}}  ha sido actualizada con éxito',
				POST_CAMP_STAT_FAILED:'Se produjo un error al intentar recuperar los KPI de la campaña seleccionada. Por favor, vuelva a intentarlo o contacte con su administrador',
				POST_CORP_MERC_FAILED:'Se produjo un error al intentar recuperar los miembros de su organización. Por favor, actualice la página o contacte con su administrador',
				POST_CORP_MERC_STAT_FAILED_KPI:'Se produjo un error al intentar recuperar las estadísticas de sus transacciones. Por favor, actualice la página o póngase en contacto con su administrador.',
				POST_CORP_MERC_STAT_FAILED_RPT:'Se produjo un error al tratar de construir su informe. Por favor, actualice la página o póngase en contacto con su administrador.',
				
				DELETE_CAMPAIGN_FAILED:'Se produjo un error al intentar eliminar su campaña. Por favor, vuelve a intentarlo o ponte en contacto con tu administrador.',
				DELETE_CAMPAIGN_SUCCESS:'Su campaña {{campaignName}} ha sido eliminada'
			}
		}
	}
};
