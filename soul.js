document.addEventListener('DOMContentLoaded', () =>  {

        var tableresults = document.getElementById("divresults");


        document.querySelector('#bttncalculate').onclick = () =>{
                tableresults.classList.remove("hidden");

        };

        // If when clear remove the table
        document.querySelector('#closeresults').onclick = () =>{

                tableresults.classList.add("hidden");

        };



        document.querySelector('#calculatorForm').onsubmit = () =>{



        const number1 = document.querySelector('#P').value;
        const table = document.querySelector('#tableresults')
        table.innerHTML =
            "<thead>\n" +
            "    <tr>\n" +
            "      <th scope=\"col\">Symbol</th>\n" +
            "      <th scope=\"col\">Variable</th>\n" +
            "      <th scope=\"col\">Value</th>\n" +
            "      <th scope=\"col\">Unit</th>\n" +
            "    </tr>\n" +
            "  </thead>\n" +
            "  <tbody>\n" +
            "    <tr>\n" +
            "      <th scope=\"row\">1</th>\n" +
            "      <td>Transmitter Power </td>\n" +
            "      <td>"+ number1 +"</td>\n" +
            "      <td>[W]</td>\n" +
            "    </tr>\n" +
            "    <tr>\n" +
            "      <th scope=\"row\">2</th>\n" +
            "      <td>Jacob</td>\n" +
            "      <td>Thornton</td>\n" +
            "      <td>@fat</td>\n" +
            "    </tr>\n" +
            "    <tr>\n" +
            "      <th scope=\"row\">3</th>\n" +
            "      <td colspan=\"2\">Larry the Bird</td>\n" +
            "      <td>@twitter</td>\n" +
            "    </tr>\n" +
            "  </tbody>";
          // const number2 = document.querySelector('#inputPassword4').value;
          //
          // var Table = document.querySelector('#resultsTable');
          // Table.innerHTML = "";
          //
          // const tr = document.createElement('tr');
          // tr.innerHTML = "<td>3</td><td>2</td>";
          //
          //
          //
          // Table.append(tr,tr);
        var elmnt = document.getElementById("tableresults")
            elmnt.scrollIntoView(true)
          // alert(`Hello!`);

          return false;
        };
        });