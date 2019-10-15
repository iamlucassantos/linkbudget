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

        // Earth!!
        document.querySelector('#calculatorFormEarth').onsubmit = () =>{



        const f = parseFloat(document.querySelector('#f').value);
        const R_down = parseFloat(document.querySelector('#R_up').value);
        const D_sc = parseFloat(document.querySelector('#D_sc').value);
        const D_gs = parseFloat(document.querySelector('#D_gs').value);
        const h =  parseFloat(document.querySelector('#h').value);
        const f_change =  parseFloat(document.querySelector('#f_up_f').value);
        const e_t =  parseFloat(document.querySelector('#e_t').value);
        const theta_es =  parseFloat(document.querySelector('#theta_es').value);
        const B_p =  parseFloat(document.querySelector('#B_p').value);
        const D_c =  parseFloat(document.querySelector('#D_c').value);
        const T_DL =  parseFloat(document.querySelector('#T_DL').value);

        const d_E = parseFloat(149.6*10**6);
        const c = parseFloat(3*10**8);
        const Re = 6371;
        var k = 1.38*10**(-23);
        var f_down = f*f_change;

        var lambda =c/(f*10**9);
        var S =  Math.sqrt((Re+h)**2-Re**2)*10**3;
        var alpha_half_t  = 21/(f * D_sc);
        var alpha_half_r = 21/(f *D_gs);
        var e_t_r = 0.1* alpha_half_r ;

        if (f<2 && f>=0.2){
                var T_up = 221
                } else if (f>=2 && f<=12){
                var T_up = 135} else{
                var T_up = 425
        };


        if (f_down<=20 && f_down>=0.2){
                var T_down = 614
                }  else{
                var T_down = 763
        }

        const P_sc = parseFloat(db(document.querySelector('#P_sc').value));
        const L_t = parseFloat(db(document.querySelector('#L_t').value));
        const L_r = parseFloat(db(document.querySelector('#L_r').value));
        var L_s = db((lambda/(4*Math.PI*S))**2);
        var G_t_up = 20*Math.log10(D_sc)+20*Math.log10(f)+17.8;
        var G_r_up = 20*Math.log10(D_gs)+20*Math.log10(f)+17.8;
        var L_pr = -12*(e_t/alpha_half_t)**2 -12*(e_t_r/alpha_half_r)**2;

        var alpha_half_t_down  = 21/(f_down * D_gs);
        var alpha_half_r_down = 21/(f_down *D_sc);
        var lambda_down =c/(f_down*10**9);

        var L_a = -0.5;
        const P_gs = parseFloat(db(document.querySelector('#P_gs').value));
        var L_s_down = db((lambda_down/(4*Math.PI*S))**2);
        var G_t_down = 20*Math.log10(D_sc)+20*Math.log10(f_down)+17.8;
        var G_r_down = 20*Math.log10(D_gs)+20*Math.log10(f_down)+17.8;
        var L_pr_down = -12*(e_t_r/alpha_half_t_down)**2 -12*(e_t/alpha_half_r_down)**2;
        var R = 0.01474;

        const tableuplink = document.querySelector('#tableuplink');
        const tabledownlink = document.querySelector('#tabledownlink');

        var SNR_up = P_sc + L_t + G_t_up + L_a + G_r_up  + L_s + L_pr + L_r + db(1/R) + db(1/k) +db(1/T_up) ;
        var margin_up = SNR_up -10;
        var SNR_down = P_gs + L_t + G_t_down + L_a + G_r_down  + L_s_down + L_pr_down + L_r + db(1/R_down) + db(1/k) +db(1/T_down) ;
        var margin_down = SNR_up -10;


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
            "      <td>"+L_a.toFixed(2)+"</td>\n" +
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
            "      <td>"+L_pr.toFixed(2)+"</td>\n" +
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
            "      <td>"+db(1/R).toFixed(2)+"</td>\n" +
            "      <td>[bit/s]^-1</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">1/k</th>\n" +
            "      <td>Boltzmann constant</td>\n" +
            "      <td>"+db(1/k).toFixed(2)+"</td>\n" +
            "      <td>[J/K]^-1</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">1/T_s</th>\n" +
            "      <td>System noise temperature</td>\n" +
            "      <td>"+db(1/T_up).toFixed(2)+"</td>\n" +
            "      <td>[K]^-1</td>\n" +
            "    </tr>\n" +
                 "    <tr  class=\"table-info\">\n" +
            "      <th scope=\"row\">(E_b/N_0)</th>\n" +
            "      <td>Received SNR</td>\n" +
            "      <td>"+SNR_up.toFixed(2)+"</td>\n" +
            "      <td></td>\n" +
            "    </tr>\n" +

             "    <tr  class=\"table-info\">\n" +
            "      <th scope=\"row\">(E_b/N_0)req</th>\n" +
            "      <td>Required SNR</td>\n" +
            "      <td>"+10+"</td>\n" +
            "      <td></td>\n" +
            "    </tr>\n" +

            "    <tr class=\"table-success\">\n" +
            "      <th scope=\"row\"></th>\n" +
            "      <td>Margin</td>\n" +
            "      <td>"+margin_up.toFixed(2)+"</td>\n" +
            "      <td></td>\n" +
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
            "      <td>"+ P_gs.toFixed(2) +"</td>\n" +
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
            "      <td>"+G_t_down.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">L_a</th>\n" +
            "      <td>Transmission path loss</td>\n" +
            "      <td>"+L_a.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">G_r</th>\n" +
            "      <td>Receiving antenna gain</td>\n" +
            "      <td>"+G_r_down.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">L_s</th>\n" +
            "      <td>Space loss</td>\n" +
            "      <td>"+L_s_down.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +


            "    <tr>\n" +
            "      <th scope=\"row\">L_pr</th>\n" +
            "      <td>Antenna pointing loss</td>\n" +
            "      <td>"+L_pr_down.toFixed(2)+"</td>\n" +
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
            "      <td>"+db(1/R_down).toFixed(2)+"</td>\n" +
            "      <td>[bit/s]^-1</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">1/k</th>\n" +
            "      <td>Boltzmann constant</td>\n" +
            "      <td>"+db(1/k).toFixed(2)+"</td>\n" +
            "      <td>[J/K]^-1</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">1/T_s</th>\n" +
            "      <td>System noise temperature</td>\n" +
            "      <td>"+db(1/T_down).toFixed(2)+"</td>\n" +
            "      <td>[K]^-1</td>\n" +
            "    </tr>\n" +
                    "    <tr  class=\"table-info\">\n" +
            "      <th scope=\"row\">(E_b/N_0)</th>\n" +
            "      <td>Received SNR</td>\n" +
            "      <td>"+SNR_down.toFixed(2)+"</td>\n" +
            "      <td></td>\n" +
            "    </tr>\n" +

             "    <tr  class=\"table-info\">\n" +
            "      <th scope=\"row\">(E_b/N_0)req</th>\n" +
            "      <td>Required SNR</td>\n" +
            "      <td>"+10+"</td>\n" +
            "      <td></td>\n" +
            "    </tr>\n" +

            "    <tr class=\"table-success\">\n" +
            "      <th scope=\"row\"></th>\n" +
            "      <td>Margin</td>\n" +
            "      <td>"+margin_down.toFixed(2)+"</td>\n" +
            "      <td></td>\n" +
            "    </tr>\n" +
            "  </tbody>";

        var elmnt = document.getElementById("divresults");
            elmnt.scrollIntoView(true);
          // alert(`Hello!`);

          return false;
        };




        document.querySelector('#calculatorForm').onsubmit = () =>{



        const f = parseFloat(document.querySelector('#f').value);
        const R_down = parseFloat(document.querySelector('#R_up').value);
        const D_sc = parseFloat(document.querySelector('#D_sc').value);
        const D_gs = parseFloat(document.querySelector('#D_gs').value);
        const d_s =  parseFloat(document.querySelector('#d_s').value);
        const f_change =  parseFloat(document.querySelector('#f_up_f').value);
        const e_t =  parseFloat(document.querySelector('#e_t').value);
        const theta_es =  parseFloat(document.querySelector('#theta_es').value);
        const B_p =  parseFloat(document.querySelector('#B_p').value);
        const D_c =  parseFloat(document.querySelector('#D_c').value);
        const T_DL =  parseFloat(document.querySelector('#T_DL').value);

        const d_E = parseFloat(149.6*10**6);
        const c = parseFloat(3*10**8);
        const Re = 6371;
        var k = 1.38*10**(-23);
        var f_down = f*f_change;

        var lambda =c/(f*10**9);
        var S =  Math.sqrt((d_E**2)+(d_s**2)-2*d_E*d_s*Math.cos(theta_es*Math.PI/180))*10**3;
        var alpha_half_t  = 21/(f * D_sc);
        var alpha_half_r = 21/(f *D_gs);
        var e_t_r = 0.1* alpha_half_r ;

        if (f<2 && f>=0.2){
                var T_up = 221
                } else if (f>=2 && f<=12){
                var T_up = 135} else{
                var T_up = 425
        };


        if (f_down<=20 && f_down>=0.2){
                var T_down = 614
                }  else{
                var T_down = 763
        }

        const P_sc = parseFloat(db(document.querySelector('#P_sc').value));
        const L_t = parseFloat(db(document.querySelector('#L_t').value));
        const L_r = parseFloat(db(document.querySelector('#L_r').value));
        var L_s = db((lambda/(4*Math.PI*S))**2);
        var G_t_up = 20*Math.log10(D_sc)+20*Math.log10(f)+17.8;
        var G_r_up = 20*Math.log10(D_gs)+20*Math.log10(f)+17.8;
        var L_pr = -12*(e_t/alpha_half_t)**2 -12*(e_t_r/alpha_half_r)**2;

        var alpha_half_t_down  = 21/(f_down * D_gs);
        var alpha_half_r_down = 21/(f_down *D_sc);
        var lambda_down =c/(f_down*10**9);

        const P_gs = parseFloat(db(document.querySelector('#P_gs').value));
        var L_s_down = db((lambda_down/(4*Math.PI*S))**2);
        var G_t_down = 20*Math.log10(D_sc)+20*Math.log10(f_down)+17.8;
        var G_r_down = 20*Math.log10(D_gs)+20*Math.log10(f_down)+17.8;
        var L_pr_down = -12*(e_t_r/alpha_half_t_down)**2 -12*(e_t/alpha_half_r_down)**2;
        var L_a = -0.5;
        var R = 0.01474;

        const tableuplink = document.querySelector('#tableuplink');
        const tabledownlink = document.querySelector('#tabledownlink');

        var SNR_up = P_sc + L_t + G_t_up + L_a + G_r_up  + L_s + L_pr + L_r + db(1/R) + db(1/k) +db(1/T_up) ;
        var margin_up = SNR_up -10;
        var SNR_down = P_gs + L_t + G_t_down + L_a + G_r_down  + L_s_down + L_pr_down + L_r + db(1/R_down) + db(1/k) +db(1/T_down) ;
        var margin_down = SNR_up -10;
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
            "      <td>"+L_a.toFixed(2)+"</td>\n" +
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
            "      <td>"+L_pr.toFixed(2)+"</td>\n" +
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
            "      <td>"+db(1/R).toFixed(2)+"</td>\n" +
            "      <td>[bit/s]^-1</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">1/k</th>\n" +
            "      <td>Boltzmann constant</td>\n" +
            "      <td>"+db(1/k).toFixed(2)+"</td>\n" +
            "      <td>[J/K]^-1</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">1/T_s</th>\n" +
            "      <td>System noise temperature</td>\n" +
            "      <td>"+db(1/T_up).toFixed(2)+"</td>\n" +
            "      <td>[K]^-1</td>\n" +
            "    </tr>\n" +

             "    <tr  class=\"table-info\">\n" +
            "      <th scope=\"row\">(E_b/N_0)</th>\n" +
            "      <td>Received SNR</td>\n" +
            "      <td>"+SNR_up.toFixed(2)+"</td>\n" +
            "      <td></td>\n" +
            "    </tr>\n" +

             "    <tr  class=\"table-info\">\n" +
            "      <th scope=\"row\">(E_b/N_0)req</th>\n" +
            "      <td>Required SNR</td>\n" +
            "      <td>"+10+"</td>\n" +
            "      <td></td>\n" +
            "    </tr>\n" +

            "    <tr class=\"table-success\">\n" +
            "      <th scope=\"row\"></th>\n" +
            "      <td>Margin</td>\n" +
            "      <td>"+margin_up.toFixed(2)+"</td>\n" +
            "      <td></td>\n" +
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
            "      <td>"+ P_gs.toFixed(2) +"</td>\n" +
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
            "      <td>"+G_t_down.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">L_a</th>\n" +
            "      <td>Transmission path loss</td>\n" +
            "      <td>"+L_a.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">G_r</th>\n" +
            "      <td>Receiving antenna gain</td>\n" +
            "      <td>"+G_r_down.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">L_s</th>\n" +
            "      <td>Space loss</td>\n" +
            "      <td>"+L_s_down.toFixed(2)+"</td>\n" +
            "      <td>[-]</td>\n" +
            "    </tr>\n" +


            "    <tr>\n" +
            "      <th scope=\"row\">L_pr</th>\n" +
            "      <td>Antenna pointing loss</td>\n" +
            "      <td>"+L_pr_down.toFixed(2)+"</td>\n" +
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
            "      <td>"+db(1/R_down).toFixed(2)+"</td>\n" +
            "      <td>[bit/s]^-1</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">1/k</th>\n" +
            "      <td>Boltzmann constant</td>\n" +
            "      <td>"+db(1/k).toFixed(2)+"</td>\n" +
            "      <td>[J/K]^-1</td>\n" +
            "    </tr>\n" +

            "    <tr>\n" +
            "      <th scope=\"row\">1/T_s</th>\n" +
            "      <td>System noise temperature</td>\n" +
            "      <td>"+db(1/T_down).toFixed(2)+"</td>\n" +
            "      <td>[K]^-1</td>\n" +
            "    </tr>\n" +
                 "    <tr  class=\"table-info\">\n" +
            "      <th scope=\"row\">(E_b/N_0)</th>\n" +
            "      <td>Received SNR</td>\n" +
            "      <td>"+SNR_down.toFixed(2)+"</td>\n" +
            "      <td></td>\n" +
            "    </tr>\n" +

             "    <tr  class=\"table-info\">\n" +
            "      <th scope=\"row\">(E_b/N_0)req</th>\n" +
            "      <td>Required SNR</td>\n" +
            "      <td>"+10+"</td>\n" +
            "      <td></td>\n" +
            "    </tr>\n" +

            "    <tr class=\"table-success\">\n" +
            "      <th scope=\"row\"></th>\n" +
            "      <td>Margin</td>\n" +
            "      <td>"+margin_down.toFixed(2)+"</td>\n" +
            "      <td></td>\n" +
            "    </tr>\n" +

            "  </tbody>";

        var elmnt = document.getElementById("divresults");
            elmnt.scrollIntoView(true);
          // alert(`Hello!`);

          return false;

        };
        // Earth orbiting!





        });