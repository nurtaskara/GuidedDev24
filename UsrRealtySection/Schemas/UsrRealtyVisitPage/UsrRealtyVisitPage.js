define("UsrRealtyVisitPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DateTimePicker_dh9xd99",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.UsrRealtyVisitSectionDS_UsrVisitDateTime_bb22wcc",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitSectionDS_UsrVisitDateTime_bb22wcc"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_7k1mwi8",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRealtyVisitSectionDS_UsrPotentialCustomer_3io1bf7",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitSectionDS_UsrPotentialCustomer_3io1bf7",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_y64x2pn",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_y64x2pn_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_7k1mwi8",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_4v7s8m4",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRealtyVisitSectionDS_UsrOwnerRealty_pt27rtj",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitSectionDS_UsrOwnerRealty_pt27rtj",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_slh3or1",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_slh3or1_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_4v7s8m4",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_sutn30t",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrRealtyVisitSectionDS_UsrComment_4c4ab6d",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitSectionDS_UsrComment_4c4ab6d"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrRealtyVisitSectionDS_UsrVisitDateTime_bb22wcc": {
						"modelConfig": {
							"path": "UsrRealtyVisitSectionDS.UsrVisitDateTime"
						}
					},
					"UsrRealtyVisitSectionDS_UsrPotentialCustomer_3io1bf7": {
						"modelConfig": {
							"path": "UsrRealtyVisitSectionDS.UsrPotentialCustomer"
						}
					},
					"UsrRealtyVisitSectionDS_UsrOwnerRealty_pt27rtj": {
						"modelConfig": {
							"path": "UsrRealtyVisitSectionDS.UsrOwnerRealty"
						}
					},
					"UsrRealtyVisitSectionDS_UsrComment_4c4ab6d": {
						"modelConfig": {
							"path": "UsrRealtyVisitSectionDS.UsrComment"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrRealtyVisitSectionDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrRealtyVisitSection"
							}
						}
					},
					"primaryDataSourceName": "UsrRealtyVisitSectionDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});