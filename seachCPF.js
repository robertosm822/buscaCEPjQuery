jQuery(document).ready( function(){
//HABILITANDO O EVENTO NO CAMPO CEP DO FORMULARIO
					jQuery( "#mgm_register_field_cep" ).blur(function() {
						//FUNCAO DE AUTOCOMPLETAR ENDERECO VIA CEP DIGITADO ===============================
						
							var url = "http://api.postmon.com.br/v1/cep/" + jQuery(this).val()+"?teste";
 
							jQuery.ajax({
								url: url ,
								 type:'GET',								
								 dataType:'json',
								 contentTYpe :   'application/json',
								 success: function(data){
									 
								  //var obj = jQuery.parseJSON(data);
									console.log( data );
									var obj = data;
									
									//document.getElementById('mgm_register_field_endere_o').value=obj.logradouro;
									jQuery('#mgm_register_field_endere_o').val(obj.logradouro);
									jQuery('#mgm_register_field_bairro').val(obj.bairro);
									jQuery('#mgm_register_field_cidade').val(obj.cidade);
																		
									//console.log(estado);
									
									jQuery("select[name='mgm_register_field[estado]'] option:contains('"+obj.estado+"')").prop('selected', true);
										
								  },

							});
					
					  
					});
					
	});
