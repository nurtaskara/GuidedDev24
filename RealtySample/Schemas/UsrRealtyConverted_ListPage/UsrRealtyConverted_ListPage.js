define("UsrRealtyConverted_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyClassic"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"sourceSchemaName": "UsrRealtyClassicFolder",
					"rootSchemaName": "UsrRealtyClassic"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1,
							"width": 155
						},
						{
							"id": "80f9d998-1a66-c919-1795-31927d0e4c8d",
							"code": "PDS_UsrType",
							"path": "UsrType",
							"caption": "#ResourceString(PDS_UsrType)#",
							"dataValueType": 10,
							"referenceSchemaName": "UsrRealtyType",
							"width": 150
						},
						{
							"id": "388b3439-f337-1b6c-7a09-343e3df7f7c0",
							"code": "PDS_UsrOfferType",
							"path": "UsrOfferType",
							"caption": "#ResourceString(PDS_UsrOfferType)#",
							"dataValueType": 10,
							"referenceSchemaName": "UsrRealtyOfferTypeClassic",
							"width": 143
						},
						{
							"id": "6a78eb5c-868c-b094-7e73-ca64d3696da4",
							"code": "PDS_UsrPriceUSD",
							"path": "UsrPriceUSD",
							"caption": "#ResourceString(PDS_UsrPriceUSD)#",
							"dataValueType": 32
						},
						{
							"id": "815cb941-30d5-461b-174d-919faa3560c7",
							"code": "PDS_UsrArea",
							"path": "UsrArea",
							"caption": "#ResourceString(PDS_UsrArea)#",
							"dataValueType": 32,
							"width": 120
						},
						{
							"id": "8568ee1b-2da9-9f0e-7f10-027931ce9b35",
							"code": "PDS_UsrComment",
							"path": "UsrComment",
							"caption": "#ResourceString(PDS_UsrComment)#",
							"dataValueType": 28,
							"width": 142
						},
						{
							"id": "e35a9c6f-86aa-70c2-c639-5dfc6358a352",
							"code": "PDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						}
					]
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrType": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrPriceUSD": {
						"modelConfig": {
							"path": "PDS.UsrPriceUSD"
						}
					},
					"PDS_UsrArea": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						}
					},
					"PDS_UsrComment": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrRealtyClassic",
					"attributes": {
						"UsrName": {
							"path": "UsrName"
						},
						"UsrType": {
							"path": "UsrType"
						},
						"UsrOfferType": {
							"path": "UsrOfferType"
						},
						"UsrPriceUSD": {
							"path": "UsrPriceUSD"
						},
						"UsrArea": {
							"path": "UsrArea"
						},
						"UsrComment": {
							"path": "UsrComment"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});