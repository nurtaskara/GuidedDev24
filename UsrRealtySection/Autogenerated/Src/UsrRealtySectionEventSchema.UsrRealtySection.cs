namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtySectionEventSchema

	/// <exclude/>
	public class UsrRealtySectionEventSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtySectionEventSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtySectionEventSchema(UsrRealtySectionEventSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("0e2ce0b4-6c55-4cdc-a78d-9f740e1549d5");
			Name = "UsrRealtySectionEvent";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("a4d351e7-a058-4bb2-966d-75aa4c1fb6c1");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,143,211,48,16,189,231,87,140,34,14,137,84,89,187,87,10,43,209,210,69,149,86,128,54,41,23,196,193,117,166,89,35,127,68,30,167,75,65,253,239,216,113,187,52,109,17,204,41,25,191,121,243,222,211,24,174,145,58,46,16,106,116,142,147,221,120,54,183,102,35,219,222,113,47,173,201,126,101,16,170,39,105,90,168,118,228,81,79,79,58,167,83,90,91,243,183,55,135,108,97,188,244,18,233,63,32,108,177,69,227,15,200,175,67,119,55,180,30,100,16,96,208,21,149,120,66,205,63,6,245,240,22,242,21,185,71,228,202,239,238,29,98,99,245,106,153,151,223,134,225,174,95,43,41,64,40,78,4,9,115,133,14,94,195,140,19,94,121,25,72,82,4,39,116,118,27,116,203,6,97,107,101,3,159,76,197,183,193,77,97,215,223,81,120,32,52,13,186,9,36,186,25,110,130,181,129,244,157,107,9,176,124,97,251,195,27,107,29,20,176,23,174,35,9,150,211,17,42,145,130,27,172,4,239,69,106,148,9,63,198,54,40,164,230,10,58,39,69,204,41,13,177,15,232,235,93,135,205,220,170,94,155,47,92,245,248,230,0,189,43,98,150,159,35,126,85,189,207,207,118,203,13,20,137,235,14,110,111,142,85,142,48,99,79,177,144,45,105,206,141,64,133,77,16,225,93,143,211,236,2,69,222,197,131,8,215,72,188,197,26,117,167,184,143,162,13,62,195,131,21,92,201,159,124,173,176,26,112,197,193,202,138,208,133,115,53,33,246,112,171,236,17,201,246,78,4,144,117,129,101,2,23,107,98,93,57,151,116,111,249,4,242,139,85,196,134,132,150,84,91,59,147,109,250,203,75,86,219,131,148,242,159,110,130,139,212,96,247,214,105,238,139,51,151,97,237,45,187,153,189,58,207,59,150,127,114,246,121,8,97,241,67,96,23,109,30,199,207,208,251,108,252,181,207,246,89,246,27,236,66,111,27,224,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("d6ca3c51-d141-c3a4-5a04-d97d6a467b7c"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("a4d351e7-a058-4bb2-966d-75aa4c1fb6c1"),
				CreatedInSchemaUId = new Guid("0e2ce0b4-6c55-4cdc-a78d-9f740e1549d5"),
				ModifiedInSchemaUId = new Guid("0e2ce0b4-6c55-4cdc-a78d-9f740e1549d5")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("0e2ce0b4-6c55-4cdc-a78d-9f740e1549d5"));
		}

		#endregion

	}

	#endregion

}

