document.addEventListener('DOMContentLoaded', () =>  {

        var divresults = document.getElementById("divresults");


        function db(number){
                return 10*Math.log10(number)
        }

        document.querySelector('#bttncalculate').onclick = () =>{
                divresults.classList.remove("hidden");

        };

        // If when clear remove the table
        document.querySelector('#closeresults').onclick = () =>{

                divresults.classList.add("hidden");

        };



        document.querySelector('#calculatorForm').onsubmit = () =>{


        const P_sc = parseFloat(db(document.querySelector('#P_sc').value));
        const L_t = parseFloat(db(document.querySelector('#L_t').value));
        const L_r = parseFloat(db(document.querySelector('#L_r').value));
        const f = parseFloat(document.querySelector('#f').value);
        const D_sc = parseFloat(document.querySelector('#D_sc').value);
        const D_gs = parseFloat(document.querySelector('#D_gs').value);
        const d_s =  parseFloat(document.querySelector('#d_s').value);
        const theta_es =  parseFloat(document.querySelector('#theta_es').value);

        const d_E = parseFloat(149.6*10**6);
        const c = parseFloat(3*10**8);
        const Re = 6371;

        var lambda =c/(f*10**9);
        var S =  Math.sqrt((d_E**2)+(d_s**2)-2*d_E*d_s*Math.cos(theta_es*Math.PI/180))*10**3;

        var L_s = db((lambda/(4*Math.PI*S))**2);
        var G_t_up = 20*Math.log10(D_sc)+20*Math.log10(f)+17.8;
        var G_r_up = 20*Math.log10(D_gs)+20*Math.log10(f)+17.8;



        const tableuplink = document.querySelector('#tableuplink');
        const tabledownlink = document.querySelector('#tabledownlink');
        tableuplink.innerHTML =
            "<thead>\n" +
            "    <tr>\n" +
            "      <th scope=\"col\">Symbol</th>\n" +
            "      <th scope=\"col\">Variable</th>\n" +
            "      <th scope=\"col\">Value [db]</th>\n" +
            "      <th scope=\"col\">Unit</th>\n" +
            "    </tr>\n" +
            "  </thead>\n" +
            "  <tbody>\n" +
            "    <tr>\n" +
            "      <th scope=\"row\">P</th>\n" +
            "      <td>Transmitter Power </td>\n" +
            "      <td>"+ P_sc.toFixed(2) +"</td>\n" +
            "      <td>[W]</td>\n" +
            "    </tr>\n" +
            "    <tr>\n" +
            "      <th scope=\"row\">L_l</th>\n" +
            "      <td>Loss factor transmitter</td>\n" +
            "      <td>"+L_t.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">G_t</th>\n" +
            "      <td>Transmitting antenna gain</td>\n" +
            "      <td>"+ G_t_up.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">L_a</th>\n" +
            "      <td>Transmission path loss</td>\n" +
            "      <td>"+L_t.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">G_r</th>\n" +
            "      <td>Receiving antenna gain</td>\n" +
            "      <td>"+ G_r_up.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">L_s</th>\n" +
            "      <td>Space loss</td>\n" +
            "      <td>"+L_s.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +


            "    <tr>\n" +
            "      <th scope=\"row\">L_pr</th>\n" +
            "      <td>Antenna pointing loss</td>\n" +
            "      <td>"+L_t.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">L_r</th>\n" +
            "      <td>Loss factor receiver</td>\n" +
            "      <td>"+L_r.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">1/R</th>\n" +
            "      <td>Required data rate</td>\n" +
            "      <td>"+L_t.toFixed(2)+"</td>\n" +
            "      <td>[bit/s]^-1</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">1/k</th>\n" +
            "      <td>Boltzmann constant</td>\n" +
            "      <td>"+f*2+"</td>\n" +
            "      <td>[J/K]^-1</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">1/T_s</th>\n" +
            "      <td>System noise temperature</td>\n" +
            "      <td>"+S+"</td>\n" +
            "      <td>[K]^-1</td>\n" +
            "    </tr>\n" +

            "  </tbody>";

        tabledownlink.innerHTML =
            "<thead>\n" +
            "    <tr>\n" +
            "      <th scope=\"col\">Symbol</th>\n" +
            "      <th scope=\"col\">Variable</th>\n" +
            "      <th scope=\"col\">Value [db]</th>\n" +
            "      <th scope=\"col\">Unit</th>\n" +
            "    </tr>\n" +
            "  </thead>\n" +
            "  <tbody>\n" +
            "    <tr>\n" +
            "      <th scope=\"row\">P</th>\n" +
            "      <td>Transmitter Power </td>\n" +
            "      <td>"+ P_sc.toFixed(2) +"</td>\n" +
            "      <td>[W]</td>\n" +
            "    </tr>\n" +
            "    <tr>\n" +
            "      <th scope=\"row\">L_l</th>\n" +
            "      <td>Loss factor transmitter</td>\n" +
            "      <td>"+L_t.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">G_t</th>\n" +
            "      <td>Transmitting antenna gain</td>\n" +
            "      <td>"+S.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">L_a</th>\n" +
            "      <td>Transmission path loss</td>\n" +
            "      <td>"+L_t.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">G_r</th>\n" +
            "      <td>Receiving antenna gain</td>\n" +
            "      <td>"+L_t.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">L_s</th>\n" +
            "      <td>Space loss</td>\n" +
            "      <td>"+L_s.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +


            "    <tr>\n" +
            "      <th scope=\"row\">L_pr</th>\n" +
            "      <td>Antenna pointing loss</td>\n" +
            "      <td>"+L_t.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">L_r</th>\n" +
            "      <td>Loss factor receiver</td>\n" +
            "      <td>"+L_r.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">1/R</th>\n" +
            "      <td>Required data rate</td>\n" +
            "      <td>"+L_t.toFixed(2)+"</td>\n" +
            "      <td>[bit/s]^-1</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">1/k</th>\n" +
            "      <td>Boltzmann constant</td>\n" +
            "      <td>"+L_t.toFixed(2)+"</td>\n" +
            "      <td>[J/K]^-1</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">1/T_s</th>\n" +
            "      <td>System noise temperature</td>\n" +
            "      <td>"+L_t.toFixed(2)+"</td>\n" +
            "      <td>[K]^-1</td>\n" +
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
        var elmnt = document.getElementById("divresults");
            elmnt.scrollIntoView(true);
          // alert(`Hello!`);

          return false;
        };
        });