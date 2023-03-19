var a = 0, player = 0, y = 0, turn = 0;
			function spot(event){
				if(player == 0){
					if(turn == 0){
						if(a == 0 && event.target.classList.contains('tinkaton')){
							event.target.classList.add('btn-primary');
							a++;
						}
						else if(event.target.classList.contains('tinkaton')){
							const elements = document.getElementsByClassName('btn-primary');
							for(var i=0; i<elements.length; i++) { 
								elements[i].classList.remove('btn-primary');
							}
							event.target.classList.add('btn-primary');
						}
						else if(event.target.classList.contains('corviknight')){
							alert("Don't do that");
						}
						else{
							const elements = document.getElementsByClassName('btn-primary');
							for(var i=0; i<elements.length; i++) { 
								if((elements[i].classList.contains('place1') && (event.target.classList.contains('place2')||event.target.classList.contains('place5')||event.target.classList.contains('place6'))) || (elements[i].classList.contains('place2') && (event.target.classList.contains('place3')||event.target.classList.contains('place6'))) || (elements[i].classList.contains('place3') && (event.target.classList.contains('place7')||event.target.classList.contains('place8'))) || (elements[i].classList.contains('place4') && (event.target.classList.contains('place1')||event.target.classList.contains('place5')||event.target.classList.contains('place9'))) || (elements[i].classList.contains('place5') && (event.target.classList.contains('place1')||event.target.classList.contains('place6')||event.target.classList.contains('place9'))) || (elements[i].classList.contains('place6') && (event.target.classList.contains('place2')||event.target.classList.contains('place3')||event.target.classList.contains('place7')||event.target.classList.contains('place10')||event.target.classList.contains('place11'))) || (elements[i].classList.contains('place7') && (event.target.classList.contains('place3')||event.target.classList.contains('place8')||event.target.classList.contains('place11'))) || (elements[i].classList.contains('place9') && (event.target.classList.contains('place5')||event.target.classList.contains('place6')||event.target.classList.contains('place10'))) || (elements[i].classList.contains('place10') && (event.target.classList.contains('place6')||event.target.classList.contains('place11'))) || (elements[i].classList.contains('place11') && (event.target.classList.contains('place7')||event.target.classList.contains('place8')))){
									elements[i].innerHTML = "";
									elements[i].classList.remove('tinkaton');
									elements[i].classList.remove('btn-primary');
									event.target.innerHTML = "";
									event.target.classList.add('tinkaton');
									var a = 0;
									turn++;
								}
								else{
									alert("Don't do that");
								}
							}
						}
					}
					if(turn == 1){
						const corviknight = document.getElementsByClassName('corviknight');
						for(var i=0; i<corviknight.length; i++) { 
							if(corviknight[i].classList.contains('place1')){
								var x = Math.floor(Math.random() * 4);
								corviknight[i].innerHTML = "";
								corviknight[i].classList.remove('corviknight');
								while(!(document.getElementById("place2").classList.contains('corviknight')) && !(document.getElementById("place4").classList.contains('corviknight')) && !(document.getElementById("place5").classList.contains('corviknight')) && !(document.getElementById("place6").classList.contains('corviknight'))){
									if(x == 0 && !(document.getElementById("place2").classList.contains('tinkaton'))){
										document.getElementById("place2").innerHTML = "";
										document.getElementById("place2").classList.add('corviknight');
									
									}
									else if(x == 1 && !(document.getElementById("place4").classList.contains('tinkaton'))){
										document.getElementById("place4").innerHTML = "";
										document.getElementById("place4").classList.add('corviknight');
										const tinkaton = document.getElementsByClassName('tinkaton');
										for(var i=0; i<tinkaton.length; i++) { 
											tinkaton[i].disabled = true;
										}
										cpuWinAlert()
										for(var i=0; i<corviknight.length; i++) { 
											corviknight[i].disabled = true;
										}
										break;
									}
									else if(x == 2 && !(document.getElementById("place5").classList.contains('tinkaton'))){
										document.getElementById("place5").innerHTML = "";
										document.getElementById("place5").classList.add('corviknight');
									}
									else if(x == 3 && !(document.getElementById("place6").classList.contains('tinkaton'))){
										document.getElementById("place6").innerHTML = "";
										document.getElementById("place6").classList.add('corviknight');
									}
									x++;
									if(x == 4){
										var x = 0;
									}
								}
							}
							else if(corviknight[i].classList.contains('place2')){
								var y = 0;
								var x = Math.floor(Math.random() * 3);
								corviknight[i].innerHTML = "";
								corviknight[i].classList.remove('corviknight');
								while(!(document.getElementById("place1").classList.contains('corviknight')) && !(document.getElementById("place3").classList.contains('corviknight')) && !(document.getElementById("place6").classList.contains('corviknight'))){
									if(x == 0 && !(document.getElementById("place1").classList.contains('tinkaton'))){
										document.getElementById("place1").innerHTML = "";
										document.getElementById("place1").classList.add('corviknight');
									}
									else if(x == 1 && !(document.getElementById("place3").classList.contains('tinkaton'))){
										document.getElementById("place3").innerHTML = "";
										document.getElementById("place3").classList.add('corviknight');
									}
									else if(x == 2 && !(document.getElementById("place6").classList.contains('tinkaton'))){
										document.getElementById("place6").innerHTML = "";
										document.getElementById("place6").classList.add('corviknight');
									}
									x++;
									if(x == 3){
										var x = 0;
									}
									y++;
									if (y == 4){
										const tinkaton = document.getElementsByClassName('tinkaton');
										for(var i=0; i<tinkaton.length; i++) { 
											tinkaton[i].disabled = true;
										}
										for(var i=0; i<corviknight.length; i++) { 
											corviknight[i].disabled = true;
										}
										playerWinAlert()
										break;
									}
								}
							}
							else if(corviknight[i].classList.contains('place3')){
								var x = Math.floor(Math.random() * 4);
								corviknight[i].innerHTML = "";
								corviknight[i].classList.remove('corviknight');
								while(!(document.getElementById("place2").classList.contains('corviknight')) && !(document.getElementById("place6").classList.contains('corviknight')) && !(document.getElementById("place7").classList.contains('corviknight')) && !(document.getElementById("place8").classList.contains('corviknight'))){
									if(x == 0 && !(document.getElementById("place2").classList.contains('tinkaton'))){
										document.getElementById("place2").innerHTML = "";
										document.getElementById("place2").classList.add('corviknight');
									}
									else if(x == 1 && !(document.getElementById("place6").classList.contains('tinkaton'))){
										document.getElementById("place6").innerHTML = "";
										document.getElementById("place6").classList.add('corviknight');
									}
									else if(x == 2 && !(document.getElementById("place7").classList.contains('tinkaton'))){
										document.getElementById("place7").innerHTML = "";
										document.getElementById("place7").classList.add('corviknight');
									}
									else if(x == 3 && !(document.getElementById("place8").classList.contains('tinkaton'))){
										document.getElementById("place8").innerHTML = "";
										document.getElementById("place8").classList.add('corviknight');
									}
									x++;
									if(x == 4){
										var x = 0;
									}
								}
							}
							else if(corviknight[i].classList.contains('place4')){
								var x = Math.floor(Math.random() * 3);
								corviknight[i].innerHTML = "";
								corviknight[i].classList.remove('corviknight');
								while(!(document.getElementById("place1").classList.contains('corviknight')) && !(document.getElementById("place5").classList.contains('corviknight')) && !(document.getElementById("place9").classList.contains('corviknight'))){
									if(x == 0 && !(document.getElementById("place1").classList.contains('tinkaton'))){
										document.getElementById("place1").innerHTML = "";
										document.getElementById("place1").classList.add('corviknight');
									}
									else if(x == 1 && !(document.getElementById("place5").classList.contains('tinkaton'))){
										document.getElementById("place5").innerHTML = "";
										document.getElementById("place5").classList.add('corviknight');
									}
									else if(x == 2 && !(document.getElementById("place9").classList.contains('tinkaton'))){
										document.getElementById("place9").innerHTML = "";
										document.getElementById("place9").classList.add('corviknight');
									}
									x++;
									if(x == 3){
										var x = 0;
									}
								}
							}
							else if(corviknight[i].classList.contains('place5')){
								var x = Math.floor(Math.random() * 4);
								corviknight[i].innerHTML = "";
								corviknight[i].classList.remove('corviknight');
								while(!(document.getElementById("place1").classList.contains('corviknight')) && !(document.getElementById("place4").classList.contains('corviknight')) && !(document.getElementById("place6").classList.contains('corviknight')) && !(document.getElementById("place9").classList.contains('corviknight'))){
									if(x == 0 && !(document.getElementById("place1").classList.contains('tinkaton'))){
										document.getElementById("place1").innerHTML = "";
										document.getElementById("place1").classList.add('corviknight');
									}
									else if(x == 1 && !(document.getElementById("place4").classList.contains('tinkaton'))){
										document.getElementById("place4").innerHTML = "";
										document.getElementById("place4").classList.add('corviknight');
										const tinkaton = document.getElementsByClassName('tinkaton');
										for(var i=0; i<tinkaton.length; i++) { 
											tinkaton[i].disabled = true;
										}
										for(var i=0; i<corviknight.length; i++) { 
											corviknight[i].disabled = true;
										}
										cpuWinAlert()
										break;
									}
									else if(x == 2 && !(document.getElementById("place6").classList.contains('tinkaton'))){
										document.getElementById("place6").innerHTML = "";
										document.getElementById("place6").classList.add('corviknight');
									}
									else if(x == 3 && !(document.getElementById("place9").classList.contains('tinkaton'))){
										document.getElementById("place9").innerHTML = "";
										document.getElementById("place9").classList.add('corviknight');
									}
									x++;
									if(x == 4){
										var x = 0;
									}
								}
							}
							else if(corviknight[i].classList.contains('place6')){
								var x = Math.floor(Math.random() * 8);
								corviknight[i].innerHTML = "";
								corviknight[i].classList.remove('corviknight');
								while(!(document.getElementById("place1").classList.contains('corviknight')) && !(document.getElementById("place2").classList.contains('corviknight')) && !(document.getElementById("place3").classList.contains('corviknight')) && !(document.getElementById("place5").classList.contains('corviknight')) && !(document.getElementById("place7").classList.contains('corviknight')) && !(document.getElementById("place9").classList.contains('corviknight')) && !(document.getElementById("place10").classList.contains('corviknight')) && !(document.getElementById("place11").classList.contains('corviknight'))){
									if(x == 0 && !(document.getElementById("place1").classList.contains('tinkaton'))){
										document.getElementById("place1").innerHTML = "";
										document.getElementById("place1").classList.add('corviknight');
									}
									else if(x == 1 && !(document.getElementById("place2").classList.contains('tinkaton'))){
										document.getElementById("place2").innerHTML = "";
										document.getElementById("place2").classList.add('corviknight');
									}
									else if(x == 2 && !(document.getElementById("place3").classList.contains('tinkaton'))){
										document.getElementById("place3").innerHTML = "";
										document.getElementById("place3").classList.add('corviknight');
									}
									else if(x == 3 && !(document.getElementById("place5").classList.contains('tinkaton'))){
										document.getElementById("place5").innerHTML = "";
										document.getElementById("place5").classList.add('corviknight');
									}
									else if(x == 4 && !(document.getElementById("place7").classList.contains('tinkaton'))){
										document.getElementById("place7").innerHTML = "";
										document.getElementById("place7").classList.add('corviknight');
									}
									else if(x == 5 && !(document.getElementById("place9").classList.contains('tinkaton'))){
										document.getElementById("place9").innerHTML = "";
										document.getElementById("place9").classList.add('corviknight');
									}
									else if(x == 6 && !(document.getElementById("place10").classList.contains('tinkaton'))){
										document.getElementById("place10").innerHTML = "";
										document.getElementById("place10").classList.add('corviknight');
									}
									else if(x == 7 && !(document.getElementById("place11").classList.contains('tinkaton'))){
										document.getElementById("place11").innerHTML = "";
										document.getElementById("place11").classList.add('corviknight');
									}
									x++;
									if(x == 8){
										var x = 0;
									}
								}
							}
							else if(corviknight[i].classList.contains('place7')){
								var x = Math.floor(Math.random() * 4);
								corviknight[i].innerHTML = "";
								corviknight[i].classList.remove('corviknight');
								while(!(document.getElementById("place3").classList.contains('corviknight')) && !(document.getElementById("place6").classList.contains('corviknight')) && !(document.getElementById("place8").classList.contains('corviknight')) && !(document.getElementById("place11").classList.contains('corviknight'))){
									if(x == 0 && !(document.getElementById("place3").classList.contains('tinkaton'))){
										document.getElementById("place3").innerHTML = "";
										document.getElementById("place3").classList.add('corviknight');
									
									}
									else if(x == 1 && !(document.getElementById("place6").classList.contains('tinkaton'))){
										document.getElementById("place6").innerHTML = "";
										document.getElementById("place6").classList.add('corviknight');
									}
									else if(x == 2 && !(document.getElementById("place8").classList.contains('tinkaton'))){
										document.getElementById("place8").innerHTML = "";
										document.getElementById("place8").classList.add('corviknight');
									}
									else if(x == 3 && !(document.getElementById("place11").classList.contains('tinkaton'))){
										document.getElementById("place11").innerHTML = "";
										document.getElementById("place11").classList.add('corviknight');
									}
									x++;
									if(x == 4){
										var x = 0;
									}
								}
							}
							else if(corviknight[i].classList.contains('place8')){
								var y = 0;
								var x = Math.floor(Math.random() * 3);
								corviknight[i].innerHTML = "";
								corviknight[i].classList.remove('corviknight');
								while(!(document.getElementById("place3").classList.contains('corviknight')) && !(document.getElementById("place7").classList.contains('corviknight')) && !(document.getElementById("place11").classList.contains('corviknight'))){
									if(x == 0 && !(document.getElementById("place3").classList.contains('tinkaton'))){
										document.getElementById("place3").innerHTML = "";
										document.getElementById("place3").classList.add('corviknight');
									}
									else if(x == 1 && !(document.getElementById("place7").classList.contains('tinkaton'))){
										document.getElementById("place7").innerHTML = "";
										document.getElementById("place7").classList.add('corviknight');
									}
									else if(x == 2 && !(document.getElementById("place11").classList.contains('tinkaton'))){
										document.getElementById("place11").innerHTML = "";
										document.getElementById("place11").classList.add('corviknight');
									}
									x++;
									if(x == 3){
										var x = 0;
									}
									y++;
									if (y == 4){
										const tinkaton = document.getElementsByClassName('tinkaton');
										for(var i=0; i<tinkaton.length; i++) { 
											tinkaton[i].disabled = true;
										}
										document.getElementById("place8").classList.add('corviknight');
										for(var i=0; i<corviknight.length; i++) { 
											corviknight[i].disabled = true;
										}
										playerWinAlert()
										break;
									}
								}
							}
							else if(corviknight[i].classList.contains('place9')){
								var x = Math.floor(Math.random() * 4);
								corviknight[i].innerHTML = "";
								corviknight[i].classList.remove('corviknight');
								while(!(document.getElementById("place4").classList.contains('corviknight')) && !(document.getElementById("place5").classList.contains('corviknight')) && !(document.getElementById("place6").classList.contains('corviknight')) && !(document.getElementById("place10").classList.contains('corviknight'))){
									if(x == 0 && !(document.getElementById("place4").classList.contains('tinkaton'))){
										document.getElementById("place4").innerHTML = "";
										document.getElementById("place4").classList.add('corviknight');
										const tinkaton = document.getElementsByClassName('tinkaton');
										for(var i=0; i<tinkaton.length; i++) { 
											tinkaton[i].disabled = true;
										}
										for(var i=0; i<corviknight.length; i++) { 
											corviknight[i].disabled = true;
										}
										cpuWinAlert()
										break;
									}
									else if(x == 1 && !(document.getElementById("place5").classList.contains('tinkaton'))){
										document.getElementById("place5").innerHTML = "";
										document.getElementById("place5").classList.add('corviknight');
									}
									else if(x == 2 && !(document.getElementById("place6").classList.contains('tinkaton'))){
										document.getElementById("place6").innerHTML = "";
										document.getElementById("place6").classList.add('corviknight');
									}
									else if(x == 3 && !(document.getElementById("place10").classList.contains('tinkaton'))){
										document.getElementById("place10").innerHTML = "";
										document.getElementById("place10").classList.add('corviknight');
									}
									x++;
									if(x == 4){
										var x = 0;
									}
								}
							}
							else if(corviknight[i].classList.contains('place10')){
								var y = 0;
								var x = Math.floor(Math.random() * 3);
								corviknight[i].innerHTML = "";
								corviknight[i].classList.remove('corviknight');
								while(!(document.getElementById("place6").classList.contains('corviknight')) && !(document.getElementById("place9").classList.contains('corviknight')) && !(document.getElementById("place11").classList.contains('corviknight'))){
									if(x == 0 && !(document.getElementById("place6").classList.contains('tinkaton'))){
										document.getElementById("place6").innerHTML = "";
										document.getElementById("place6").classList.add('corviknight');	
									}
									else if(x == 1 && !(document.getElementById("place9").classList.contains('tinkaton'))){
										document.getElementById("place9").innerHTML = "";
										document.getElementById("place9").classList.add('corviknight');
									}
									else if(x == 2 && !(document.getElementById("place11").classList.contains('tinkaton'))){
										document.getElementById("place11").innerHTML = "";
										document.getElementById("place11").classList.add('corviknight');
									}
									x++;
									if(x == 3){
										var x = 0;
									}
									y++;
									if (y == 4){
										const tinkaton = document.getElementsByClassName('tinkaton');
										for(var i=0; i<tinkaton.length; i++) { 
											tinkaton[i].disabled = true;
										}
										document.getElementById("place8").classList.add('corviknight');
										for(var i=0; i<corviknight.length; i++) { 
											corviknight[i].disabled = true;
										}
										playerWinAlert()
										break;
									}
								}
							}
							else if(corviknight[i].classList.contains('place11')){
								var x = Math.floor(Math.random() * 4);
								corviknight[i].innerHTML = "";
								corviknight[i].classList.remove('corviknight');
								while(!(document.getElementById("place6").classList.contains('corviknight')) && !(document.getElementById("place7").classList.contains('corviknight')) && !(document.getElementById("place8").classList.contains('corviknight')) && !(document.getElementById("place10").classList.contains('corviknight'))){
									if(x == 0 && !(document.getElementById("place6").classList.contains('tinkaton'))){
										document.getElementById("place6").innerHTML = "";
										document.getElementById("place6").classList.add('corviknight');
									}
									else if(x == 1 && !(document.getElementById("place7").classList.contains('tinkaton'))){
										document.getElementById("place7").innerHTML = "";
										document.getElementById("place7").classList.add('corviknight');
									}
									else if(x == 2 && !(document.getElementById("place8").classList.contains('tinkaton'))){
										document.getElementById("place8").innerHTML = "";
										document.getElementById("place8").classList.add('corviknight');
									}
									else if(x == 3 && !(document.getElementById("place10").classList.contains('tinkaton'))){
										document.getElementById("place10").innerHTML = "";
										document.getElementById("place10").classList.add('corviknight');
									}
									x++;
									if(x == 4){
										var x = 0;
									}
								}
							}
						}
						turn--;
						if(document.getElementById("place8").classList.contains('tinkaton')){
							const tinkaton = document.getElementsByClassName('tinkaton');
							for(var i=0; i<tinkaton.length; i++) { 
								tinkaton[i].disabled = true;
							}
							for(var i=0; i<corviknight.length; i++) { 
								corviknight[i].disabled = true;
							}
							cpuWinAlert()
						}
						if(!(document.getElementById("place4").classList.contains('tinkaton')) && (document.getElementById("place1").classList.contains('corviknight') || document.getElementById("place5").classList.contains('corviknight') || document.getElementById("place9").classList.contains('corviknight'))){
							const tinkaton = document.getElementsByClassName('tinkaton');
							for(var i=0; i<tinkaton.length; i++) { 
								tinkaton[i].disabled = true;
							}
							for(var i=0; i<corviknight.length; i++) { 
								corviknight[i].disabled = true;
							}
							cpuWinAlert()
						}
						if((!(document.getElementById("place1").classList.contains('tinkaton')) && !(document.getElementById("place4").classList.contains('tinkaton')) && !(document.getElementById("place5").classList.contains('tinkaton')) && !(document.getElementById("place9").classList.contains('tinkaton'))) && (document.getElementById("place2").classList.contains('corviknight') || document.getElementById("place6").classList.contains('corviknight') || document.getElementById("place10").classList.contains('corviknight'))){
							const tinkaton = document.getElementsByClassName('tinkaton');
							for(var i=0; i<tinkaton.length; i++) { 
								tinkaton[i].disabled = true;
							}
							for(var i=0; i<corviknight.length; i++) { 
								corviknight[i].disabled = true;
							}
							cpuWinAlert()
						}
					}
				}
				if(player == 1){
					if(turn == 0){
						if(event.target.classList.contains('corviknight')){
							event.target.classList.add('btn-primary');
						}
						else if(event.target.classList.contains('tinkaton')){
							alert("Don't do that");
						}
						else{
							const elements = document.getElementsByClassName('btn-primary');
							for(var i=0; i<elements.length; i++) { 
								if((elements[i].classList.contains('place1') && (event.target.classList.contains('place2')||event.target.classList.contains('place4')||event.target.classList.contains('place5')||event.target.classList.contains('place6'))) || (elements[i].classList.contains('place2') && (event.target.classList.contains('place1')||event.target.classList.contains('place3')||event.target.classList.contains('place6'))) || (elements[i].classList.contains('place3') && (event.target.classList.contains('place2')||event.target.classList.contains('place6')||event.target.classList.contains('place7')||event.target.classList.contains('place8'))) || (elements[i].classList.contains('place4') && (event.target.classList.contains('place1')||event.target.classList.contains('place5')||event.target.classList.contains('place9'))) || (elements[i].classList.contains('place5') && (event.target.classList.contains('place1')||event.target.classList.contains('place4')||event.target.classList.contains('place6')||event.target.classList.contains('place9'))) || (elements[i].classList.contains('place6') && (event.target.classList.contains('place1')||event.target.classList.contains('place2')||event.target.classList.contains('place3')||event.target.classList.contains('place5')||event.target.classList.contains('place7')||event.target.classList.contains('place9')||event.target.classList.contains('place10')||event.target.classList.contains('place11'))) || (elements[i].classList.contains('place7') && (event.target.classList.contains('place3')||event.target.classList.contains('place6')||event.target.classList.contains('place8')||event.target.classList.contains('place11'))) || (elements[i].classList.contains('place8') && (event.target.classList.contains('place3')||event.target.classList.contains('place7')||event.target.classList.contains('place11'))) || (elements[i].classList.contains('place9') && (event.target.classList.contains('place4')||event.target.classList.contains('place5')||event.target.classList.contains('place6')||event.target.classList.contains('place10'))) || (elements[i].classList.contains('place10') && (event.target.classList.contains('place6')||event.target.classList.contains('place9')||event.target.classList.contains('place11'))) || (elements[i].classList.contains('place11') && (event.target.classList.contains('place6')||event.target.classList.contains('place7')||event.target.classList.contains('place8')||event.target.classList.contains('place10')))){
									elements[i].innerHTML = "";
									elements[i].classList.remove('corviknight');
									elements[i].classList.remove('btn-primary');
									event.target.innerHTML = "";
									event.target.classList.add('corviknight');
									var a = 0;
									turn++
								}
								else{
									alert("Don't do that");
								}
							}
								if(document.getElementById("place8").classList.contains('tinkaton') && turn == 1){
									const corviknight = document.getElementsByClassName('corviknight');
									for(var i=0; i<corviknight.length; i++) { 
										corviknight[i].disabled = true;
									}
									playerWinAlert()
									turn--
								}
								if(document.getElementById("place4").classList.contains('corviknight') && turn == 1){
									const corviknight = document.getElementsByClassName('corviknight');
									for(var i=0; i<corviknight.length; i++) { 
										corviknight[i].disabled = true;
									}
									playerWinAlert()
									turn--
								}
								if((document.getElementById("place1").classList.contains('corviknight') || document.getElementById("place5").classList.contains('corviknight') || document.getElementById("place9").classList.contains('corviknight')) && !(document.getElementById("place4").classList.contains('tinkaton')) && turn == 1){
									const corviknight = document.getElementsByClassName('corviknight');
									for(var i=0; i<corviknight.length; i++) { 
										corviknight[i].disabled = true;
									}
									playerWinAlert()
									turn--
								}
								if((document.getElementById("place2").classList.contains('corviknight') || document.getElementById("place6").classList.contains('corviknight') || document.getElementById("place10").classList.contains('corviknight')) && !(document.getElementById("place1").classList.contains('tinkaton')) && !(document.getElementById("place4").classList.contains('tinkaton')) && !(document.getElementById("place5").classList.contains('tinkaton')) && !(document.getElementById("place9").classList.contains('tinkaton')) && turn == 1){
									const corviknight = document.getElementsByClassName('corviknight');
									for(var i=0; i<corviknight.length; i++) { 
										corviknight[i].disabled = true;
									}
									playerWinAlert()
									turn--
								}
						}
					}
					if(turn == 1){
						const tinkaton = document.getElementsByClassName('tinkaton');
						var x = Math.floor(Math.random() * 3), z = 0;
						do{
							var z = 0;
							if(tinkaton[x].classList.contains('place1') && z == 0){
								var y = Math.floor(Math.random() * 3), ctr = 0, z = 1;
								while(tinkaton[x].classList.contains('place1')){
									console.log("place1" + tinkaton[x].classList.contains('place1'))
									if(y == 0 && !(document.getElementById("place2").classList.contains('tinkaton')) && !(document.getElementById("place2").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place2").innerHTML = "";
										document.getElementById("place2").classList.add('tinkaton');
									}
									else if(y == 1 && !(document.getElementById("place5").classList.contains('tinkaton')) && !(document.getElementById("place5").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place5").innerHTML = "";
										document.getElementById("place5").classList.add('tinkaton');
									}
									else if(y == 2 && !(document.getElementById("place6").classList.contains('tinkaton')) && !(document.getElementById("place6").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place6").innerHTML = "";
										document.getElementById("place6").classList.add('tinkaton');
									}
									y++;
									if(y == 3){
										var y = 0;
										ctr++
										if(ctr == 6){
											ctr++
											x++
											var z = 2;
											if(x == 3){
												var x = 0;
											}
										}
									}
								}
							}
							else if(tinkaton[x].classList.contains('place2') && z == 0){
								var y = Math.floor(Math.random() * 2), ctr = 0, z = 1;
								while(tinkaton[x].classList.contains('place2')){
									console.log("place2" + tinkaton[x].classList.contains('place2'))
									if(y == 0 && !(document.getElementById("place3").classList.contains('tinkaton')) && !(document.getElementById("place3").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place3").innerHTML = "";
										document.getElementById("place3").classList.add('tinkaton');
									}
									else if(y == 1 && !(document.getElementById("place6").classList.contains('tinkaton')) && !(document.getElementById("place6").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place6").innerHTML = "";
										document.getElementById("place6").classList.add('tinkaton');
									}
									y++;
									if(y == 2){
										var y = 0;
										ctr++
										if(ctr == 6){
											ctr++
											x++
											var z = 2;
											if(x == 3){
												var x = 0;
											}
										}
									}
								}
							}
							else if(tinkaton[x].classList.contains('place3') && z == 0){
								var y = Math.floor(Math.random() * 2), z = 1;
								while(tinkaton[x].classList.contains('place3')){
									console.log("place3" + tinkaton[x].classList.contains('place3'))
									if(y == 0 && !(document.getElementById("place7").classList.contains('tinkaton')) && !(document.getElementById("place7").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place7").innerHTML = "";
										document.getElementById("place7").classList.add('tinkaton');
									}
									else if(y == 1 && !(document.getElementById("place8").classList.contains('tinkaton')) && !(document.getElementById("place8").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place8").innerHTML = "";
										document.getElementById("place8").classList.add('tinkaton');
									}
									y++;
									if(y == 2){
										var y = 0;
										ctr++
										if(ctr == 6){
											ctr++
											x++
											var z = 2;
											if(x == 3){
												var x = 0;
											}
										}
									}
								}
							}
							else if(tinkaton[x].classList.contains('place4') && z == 0){
								var y = Math.floor(Math.random() * 3), z = 1;
								while(tinkaton[x].classList.contains('place4')){
									console.log("place4" + tinkaton[x].classList.contains('place4'))
									if(y == 0 && !(document.getElementById("place1").classList.contains('tinkaton')) && !(document.getElementById("place1").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place1").innerHTML = "";
										document.getElementById("place1").classList.add('tinkaton');
									}
									else if(y == 1 && !(document.getElementById("place5").classList.contains('tinkaton')) && !(document.getElementById("place5").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place5").innerHTML = "";
										document.getElementById("place5").classList.add('tinkaton');
									}
									else if(y == 2 && !(document.getElementById("place9").classList.contains('tinkaton')) && !(document.getElementById("place9").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place9").innerHTML = "";
										document.getElementById("place9").classList.add('tinkaton');
									}
									y++;
									if(y == 3){
										var y = 0;
										ctr++
										if(ctr == 6){
											ctr++
											x++
											var z = 2;
											if(x == 3){
												var x = 0;
											}
										}
									}
								}
							}
							else if(tinkaton[x].classList.contains('place5') && z == 0){
								var y = Math.floor(Math.random() * 3), ctr = 0, z = 1;
								while(tinkaton[x].classList.contains('place5')){
									console.log("place5" + tinkaton[x].classList.contains('place5'))
									if(y == 0 && !(document.getElementById("place1").classList.contains('tinkaton')) && !(document.getElementById("place1").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place1").innerHTML = "";
										document.getElementById("place1").classList.add('tinkaton');
									}
									else if(y == 1 && !(document.getElementById("place6").classList.contains('tinkaton')) && !(document.getElementById("place6").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place6").innerHTML = "";
										document.getElementById("place6").classList.add('tinkaton');
									}
									else if(y == 2 && !(document.getElementById("place9").classList.contains('tinkaton')) && !(document.getElementById("place9").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place9").innerHTML = "";
										document.getElementById("place9").classList.add('tinkaton');
									}
									y++;
									if(y == 3){
										var y = 0;
										ctr++
										if(ctr == 6){
											ctr++
											x++
											var z = 2;
											if(x == 3){
												var x = 0;
											}
										}
									}
								}
							}
							else if(tinkaton[x].classList.contains('place6') && z == 0){
								var y = Math.floor(Math.random() * 5), ctr = 0, z = 1;
								while(tinkaton[x].classList.contains('place6')){
									console.log("place6" + tinkaton[x].classList.contains('place6'))
									if(y == 0 && !(document.getElementById("place2").classList.contains('tinkaton')) && !(document.getElementById("place2").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place2").innerHTML = "";
										document.getElementById("place2").classList.add('tinkaton');
									}
									else if(y == 1 && !(document.getElementById("place3").classList.contains('tinkaton')) && !(document.getElementById("place3").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place3").innerHTML = "";
										document.getElementById("place3").classList.add('tinkaton');
									}
									else if(y == 2 && !(document.getElementById("place7").classList.contains('tinkaton')) && !(document.getElementById("place7").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place7").innerHTML = "";
										document.getElementById("place7").classList.add('tinkaton');
									}
									else if(y == 3 && !(document.getElementById("place10").classList.contains('tinkaton')) && !(document.getElementById("place10").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place10").innerHTML = "";
										document.getElementById("place10").classList.add('tinkaton');
									}
									else if(y == 4 && !(document.getElementById("place11").classList.contains('tinkaton')) && !(document.getElementById("place11").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place11").innerHTML = "";
										document.getElementById("place11").classList.add('tinkaton');
									}
									y++;
									if(y == 5){
										var y = 0;
										ctr++
										if(ctr == 6){
											ctr++
											x++
											var z = 2;
											if(x == 3){
												var x = 0;
											}
										}
									}
								}
							}
							else if(tinkaton[x].classList.contains('place7') && z == 0){
								var y = Math.floor(Math.random() * 3), ctr = 0, z = 1;
								while(tinkaton[x].classList.contains('place7')){
									console.log("place7" + tinkaton[x].classList.contains('place7'))
									if(y == 0 && !(document.getElementById("place3").classList.contains('tinkaton')) && !(document.getElementById("place3").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place3").innerHTML = "";
										document.getElementById("place3").classList.add('tinkaton');
									}
									else if(y == 1 && !(document.getElementById("place8").classList.contains('tinkaton')) && !(document.getElementById("place8").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place8").innerHTML = "";
										document.getElementById("place8").classList.add('tinkaton');
									}
									else if(y == 2 && !(document.getElementById("place11").classList.contains('tinkaton')) && !(document.getElementById("place11").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place11").innerHTML = "";
										document.getElementById("place11").classList.add('tinkaton');
									}
									y++;
									if(y == 3){
										var y = 0;
										ctr++
										if(ctr == 6){
											ctr++
											x++
											var z = 2;
											if(x == 3){
												var x = 0;
											}
										}
									}
								}
							}
							else if(tinkaton[x].classList.contains('place8') && z == 0){
								var z = 2;
								x++
								if(x == 3){
									var x = 0;
								}
							}
							else if(tinkaton[x].classList.contains('place9') && z == 0){
								var y = Math.floor(Math.random() * 3), ctr = 0, z = 1;
								while(tinkaton[x].classList.contains('place9')){
									console.log("place9" + tinkaton[x].classList.contains('place9'))
									if(y == 0 && !(document.getElementById("place5").classList.contains('tinkaton')) && !(document.getElementById("place5").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place5").innerHTML = "";
										document.getElementById("place5").classList.add('tinkaton');
									}
									else if(y == 1 && !(document.getElementById("place6").classList.contains('tinkaton')) && !(document.getElementById("place6").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place6").innerHTML = "";
										document.getElementById("place6").classList.add('tinkaton');
									}
									else if(y == 2 && !(document.getElementById("place10").classList.contains('tinkaton')) && !(document.getElementById("place10").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place10").innerHTML = "";
										document.getElementById("place10").classList.add('tinkaton');
									}
									y++;
									if(y == 3){
										var y = 0;
										ctr++
										if(ctr == 6){
											ctr++
											x++
											var z = 2;
											if(x == 3){
												var x = 0;
											}
										}
									}
								}
							}
							else if(tinkaton[x].classList.contains('place10') && z == 0){
								var y = Math.floor(Math.random() * 2), ctr = 0, z = 1;
								while(tinkaton[x].classList.contains('place10')){
									console.log("place10" + tinkaton[x].classList.contains('place10'))
									if(y == 0 && !(document.getElementById("place6").classList.contains('tinkaton')) && !(document.getElementById("place6").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place6").innerHTML = "";
										document.getElementById("place6").classList.add('tinkaton');
									}
									else if(y == 1 && !(document.getElementById("place11").classList.contains('tinkaton')) && !(document.getElementById("place11").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place11").innerHTML = "";
										document.getElementById("place11").classList.add('tinkaton');
									}
									y++;
									if(y == 2){
										var y = 0;
										ctr++
										if(ctr == 6){
											ctr++
											x++
											var z = 2;
											if(x == 3){
												var x = 0;
											}
										}
									}
								}
							}
							else if(tinkaton[x].classList.contains('place11') && z == 0){
								var y = Math.floor(Math.random() * 2), ctr = 0, z = 1;
								while(tinkaton[x].classList.contains('place11')){
									console.log("place11" + tinkaton[x].classList.contains('place11'))
									if(y == 0 && !(document.getElementById("place7").classList.contains('tinkaton')) && !(document.getElementById("place7").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place7").innerHTML = "";
										document.getElementById("place7").classList.add('tinkaton');
									}
									else if(y == 1 && !(document.getElementById("place8").classList.contains('tinkaton')) && !(document.getElementById("place8").classList.contains('corviknight'))){
										tinkaton[x].innerHTML = "";
										tinkaton[x].classList.remove('tinkaton');
										document.getElementById("place8").innerHTML = "";
										document.getElementById("place8").classList.add('tinkaton');
									}
									y++;
									if(y == 2){
										var y = 0;
										ctr++
										if(ctr == 6){
											ctr++
											x++
											var z = 2;
											if(x == 3){
												var x = 0;
											}
										}
									}
								}
							}
						}
						while(z == 2);
						turn--
						if(document.getElementById("place3").classList.contains('tinkaton') && document.getElementById("place7").classList.contains('tinkaton') && document.getElementById("place11").classList.contains('tinkaton') && document.getElementById("place8").classList.contains('corviknight')){
							const corviknight = document.getElementsByClassName('corviknight');
							for(var i=0; i<corviknight.length; i++) { 
								corviknight[i].disabled = true;
							}
							cpuWinAlert()
						}
						if(document.getElementById("place1").classList.contains('tinkaton') && document.getElementById("place3").classList.contains('tinkaton') && document.getElementById("place6").classList.contains('tinkaton') && document.getElementById("place2").classList.contains('corviknight')){
							const corviknight = document.getElementsByClassName('corviknight');
							for(var i=0; i<corviknight.length; i++) { 
								corviknight[i].disabled = true;
							}
							cpuWinAlert()
						}
						if(document.getElementById("place6").classList.contains('tinkaton') && document.getElementById("place9").classList.contains('tinkaton') && document.getElementById("place11").classList.contains('tinkaton') && document.getElementById("place10").classList.contains('corviknight')){
							const corviknight = document.getElementsByClassName('corviknight');
							for(var i=0; i<corviknight.length; i++) { 
								corviknight[i].disabled = true;
							}
							cpuWinAlert()
						}
					}
				}
			}
			function reset(){
				const place = document.getElementsByClassName('boton');
				for(var i=0; i<place.length; i++) { 
					place[i].classList.remove('tinkaton');
					place[i].classList.remove('corviknight');
					place[i].classList.remove('btn-primary');
					place[i].disabled=false;
					place[i].innerHTML = "";
				}
				document.getElementById("place1").innerHTML = "";
				document.getElementById("place1").classList.add('tinkaton');
				document.getElementById("place4").innerHTML = "";
				document.getElementById("place4").classList.add('tinkaton');
				document.getElementById("place9").innerHTML = "";
				document.getElementById("place9").classList.add('tinkaton');
				document.getElementById("place8").innerHTML = "";
				document.getElementById("place8").classList.add('corviknight');
				if(document.getElementById("player").innerHTML == "Play as Bidoof"){
					var x = Math.floor(Math.random() * 3);
					if(x == 0){
						document.getElementById("place1").innerHTML = "";
						document.getElementById("place1").classList.remove('tinkaton');
						var x = Math.floor(Math.random() * 3);
						if(x == 0){
							document.getElementById("place2").innerHTML = "";
							document.getElementById("place2").classList.add('tinkaton');
						}
						else if(x == 1){
							document.getElementById("place5").innerHTML = "";
							document.getElementById("place5").classList.add('tinkaton');
						}
						else if(x == 2){
							document.getElementById("place6").innerHTML = "";
							document.getElementById("place6").classList.add('tinkaton');
						}
					}
					else if(x == 1){
						document.getElementById("place4").innerHTML = "";
						document.getElementById("place4").classList.remove('tinkaton');
						document.getElementById("place5").innerHTML = "";
						document.getElementById("place5").classList.add('tinkaton');
					}
					else if(x == 2){
						document.getElementById("place9").innerHTML = "";
						document.getElementById("place9").classList.remove('tinkaton');
						var x = Math.floor(Math.random() * 3);
						if(x == 0){
							document.getElementById("place5").innerHTML = "";
							document.getElementById("place5").classList.add('tinkaton');
						}
						else if(x == 1){
							document.getElementById("place6").innerHTML = "";
							document.getElementById("place6").classList.add('tinkaton');
						}
						else if(x == 2){
							document.getElementById("place10").innerHTML = "";
							document.getElementById("place10").classList.add('tinkaton');
						}
					}
				}
			}
			function playerChange(event){
				const place = document.getElementsByClassName('boton');
				for(var i=0; i<place.length; i++) { 
					place[i].classList.remove('tinkaton');
					place[i].classList.remove('corviknight');
					place[i].classList.remove('btn-primary');
					place[i].disabled=false;
					place[i].innerHTML = "";
				}
				document.getElementById("place1").innerHTML = "";
				document.getElementById("place1").classList.add('tinkaton');
				document.getElementById("place4").innerHTML = "";
				document.getElementById("place4").classList.add('tinkaton');
				document.getElementById("place9").innerHTML = "";
				document.getElementById("place9").classList.add('tinkaton');
				document.getElementById("place8").innerHTML = "";
				document.getElementById("place8").classList.add('corviknight');
				if(event.target.innerHTML == "Play as Arceus"){
					document.getElementById("playerTracker").innerHTML = "Currently playing as: Arceus";
					event.target.innerHTML = "Play as Bidoof";
					player++;
					var x = Math.floor(Math.random() * 3);
					if(x == 0){
						document.getElementById("place1").innerHTML = "";
						document.getElementById("place1").classList.remove('tinkaton');
						var x = Math.floor(Math.random() * 3);
						if(x == 0){
							document.getElementById("place2").innerHTML = "";
							document.getElementById("place2").classList.add('tinkaton');
						}
						else if(x == 1){
							document.getElementById("place5").innerHTML = "";
							document.getElementById("place5").classList.add('tinkaton');
						}
						else if(x == 2){
							document.getElementById("place6").innerHTML = "";
							document.getElementById("place6").classList.add('tinkaton');
						}
					}
					else if(x == 1){
						document.getElementById("place4").innerHTML = "";
						document.getElementById("place4").classList.remove('tinkaton');
						document.getElementById("place5").innerHTML = "";
						document.getElementById("place5").classList.add('tinkaton');
					}
					else if(x == 2){
						document.getElementById("place9").innerHTML = "";
						document.getElementById("place9").classList.remove('tinkaton');
						var x = Math.floor(Math.random() * 3);
						if(x == 0){
							document.getElementById("place5").innerHTML = "";
							document.getElementById("place5").classList.add('tinkaton');
						}
						else if(x == 1){
							document.getElementById("place6").innerHTML = "";
							document.getElementById("place6").classList.add('tinkaton');
						}
						else if(x == 2){
							document.getElementById("place10").innerHTML = "";
							document.getElementById("place10").classList.add('tinkaton');
						}
					}
				}
				else if(event.target.innerHTML == "Play as Bidoof"){
					document.getElementById("playerTracker").innerHTML = "Currently playing as: Bidoof";
					event.target.innerHTML = "Play as Arceus";
					player--;
				}
			}
/*----------------------------------------non game functions----------------------------------------------*/
function exitAlert(x){
	document.getElementById('screenDark').style.display = 'none';
	if(x==1){
		document.getElementById('rulesAlert').style.display = 'none';
	}
	else if (x==2){
		document.getElementById('cpuWinAlert').style.display = 'none';
	}
	else if (x==3){
		document.getElementById('playerWinAlert').style.display = 'none';
	}
}

function cpuWinAlert(){
	document.getElementById('screenDark').style.display = 'flex';
	document.getElementById('cpuWinAlert').style.display = 'flex';
}

function playerWinAlert(){
	document.getElementById('screenDark').style.display = 'flex';
	document.getElementById('playerWinAlert').style.display = 'flex';
}