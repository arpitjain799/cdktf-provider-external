// https://www.terraform.io/docs/providers/external/d/external
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataExternalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/external/d/external#id DataExternal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of strings, whose first element is the program to run and whose subsequent elements are optional command line arguments to the program. Terraform does not execute the program through a shell, so it is not necessary to escape shell metacharacters nor add quotes around arguments containing spaces.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/external/d/external#program DataExternal#program}
  */
  readonly program: string[];
  /**
  * A map of string values to pass to the external program as the query arguments. If not supplied, the program will receive an empty object as its input.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/external/d/external#query DataExternal#query}
  */
  readonly query?: { [key: string]: string };
  /**
  * Working directory of the program. If not supplied, the program will run in the current directory.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/external/d/external#working_dir DataExternal#working_dir}
  */
  readonly workingDir?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/external/d/external external}
*/
export class DataExternal extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "external";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/external/d/external external} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataExternalConfig
  */
  public constructor(scope: Construct, id: string, config: DataExternalConfig) {
    super(scope, id, {
      terraformResourceType: 'external',
      terraformGeneratorMetadata: {
        providerName: 'external',
        providerVersion: '2.2.2',
        providerVersionConstraint: '~> 2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
    this._program = config.program;
    this._query = config.query;
    this._workingDir = config.workingDir;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // program - computed: false, optional: false, required: true
  private _program?: string[]; 
  public get program() {
    return this.getListAttribute('program');
  }
  public set program(value: string[]) {
    this._program = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programInput() {
    return this._program;
  }

  // query - computed: false, optional: true, required: false
  private _query?: { [key: string]: string }; 
  public get query() {
    return this.getStringMapAttribute('query');
  }
  public set query(value: { [key: string]: string }) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // result - computed: true, optional: false, required: false
  private _result = new cdktf.StringMap(this, "result");
  public get result() {
    return this._result;
  }

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      program: cdktf.listMapper(cdktf.stringToTerraform)(this._program),
      query: cdktf.hashMapper(cdktf.stringToTerraform)(this._query),
      working_dir: cdktf.stringToTerraform(this._workingDir),
    };
  }
}
