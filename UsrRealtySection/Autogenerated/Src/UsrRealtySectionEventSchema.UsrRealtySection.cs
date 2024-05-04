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
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,83,40,206,207,77,85,72,86,86,72,206,79,73,5,0,144,244,159,75,13,0,0,0 };
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

