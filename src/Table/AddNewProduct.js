import React, { Component } from "react";
import TableRowHeadComponent from "./TableRowHeadComponent";

class AddNewProduct extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Add New Product</h1>
        <table className="table table-hover table-bordered">
          <thead>
            <tr className="grid-container">
              <th className="Hauptartikelnr" scope="row">
                Hauptartikelnr
              </th>
              <td className="Artikelname">Artikelname</td>
              <td className="Hersteller">Hersteller</td>
              <td className="Beschreibung">Beschreibung</td>
              <td className="Materialangaben">Materialangaben</td>
              <td className="Geschlecht">Geschlecht</td>
              <td className="Produktart">Produktart</td>
              <td className="Armel">Armel</td>
              <td className="Bein">Bein</td>
              <td className="Kragen">Kragen</td>
              <td className="Herstellung">Herstellung</td>
              <td className="Taschenart">Taschenart</td>
              <td className="Grammatur">Grammatur</td>
              <td className="Material">Material</td>
              <td className="Ursprungsland">Ursprungsland</td>
              <td className="Bildname">Bildname</td>
              <td className="Edit">Edit</td>
            </tr>
          </thead>
          <tbody>
            <tr className="grid-container">
              <th className="Hauptartikelnr" scope="col">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </th>
              <th className="Artikelname" scope="col">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </th>
              <th className="Hersteller" scope="col">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </th>
              <th className="Beschreibung" scope="col">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </th>
              <th className="Materialangaben" scope="col">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </th>
              <th className="Geschlecht" scope="col">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </th>
              <th className="Produktart" scope="col">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </th>
              <th className="Armel" scope="col">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </th>
              <th className="Bein" scope="col">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </th>
              <th className="Kragen" scope="col">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </th>
              <th className="Herstellung" scope="col">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </th>
              <th className="Taschenart" scope="col">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </th>
              <th className="Grammatur" scope="col">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </th>
              <th className="Material" scope="col">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </th>
              <th className="Ursprungsland" scope="col">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </th>
              <th className="Bildname" scope="col">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </th>
              <th>
                <button>Add</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AddNewProduct;
