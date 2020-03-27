//FETCH DATA
fetch('wordListerServer.php').then((res) => res.json())
.then(response => {	
	console.log(response);
	let output = '';
	for(let i in response) {
		output += '<tr>';
			output += '<td id="No" class="tableRow" >';
			output += response[i].No;
			output += '</td>';		
			
			output += '<td id="Word" class="tableRow" >';
			output += response[i].Word;
			output += '</td>';		
			
			output += '<td id="Meaning" class="tableRow" >';
			output += response[i].Meaning;
			output += '</td>';
			
			output += '<td id="Definition" class="tableRow" >';
			output += response[i].Definition;
			output += '</td>';		
			
			output += '<td id="Additional_Info" class="tableRow" >';
			output += response[i].Additional_Info;
			output += '</td>';		
			
			output += '<td id="Relevant_Example" class="tableRow" >';
			output += response[i].Relevant_Example;
			output += '</td>';
			
			output += '<td id="Root_Index" class="tableRow" >';
			output += response[i].Root_Index;
			output += '</td>';		
			
			output += '<td id="Root_Unit" class="tableRow" >';
			output += response[i].Root_Unit;
			output += '</td>';		
			
			output += '<td id="Date" class="tableRow" >';
			output += response[i].Date;
			output += '</td>';
		
		output += '</tr>';
	}
	document.querySelector('.tbody').innerHTML = output;
}).catch(error => console.log(error));

//SEARCHING ALL DATA
$(document).ready(function(){

	
//OLD METHOD SEARCHING ALL
$("#txtUserInputAll").on("keyup", function() {
  var value = $(this).val().toLowerCase();
  $("#wordListTableBody tr").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
});
});

//OLD METHOD SEARCHING ONLY MEANING
$("#txtUserInputMeaning").on("keyup", function() {
  var value = $(this).val().toLowerCase();
  $("#wordListTableBody tr").filter( "#meaning" ,function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
});


//$(document).ready(function() {
//	// Setup - add a text input to each footer cell
//    $('#tableWords thead tr').clone(true).appendTo( '#tableWords thead' );
//    $('#tableWords thead tr:eq(1) th').each( function (i) {
//        var title = $(this).text();
//        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
//        $( 'input', this ).on( 'keyup change', function () {
//        if ( table.column(i).search() !== this.value ) {
//                table
//                    .column(i)
//                    .search( this.value )
//                    .draw();
//            }
//        } );
//    } );
// 
//    var table = $('#tableWords').DataTable( {
//        orderCellsTop: true,
//        fixedHeader: true
//    } );
//} );



//FROM NEW SITE
$(document).ready(function() {
    (function($) {
        $("#tableWords tbody").addClass("search");
        $('#txtUserInputMeaning').keyup(function() {
        	
            var rex = new RegExp($(this).val(), 'i');
            $('.search tr ').hide();
            
            //Recusively filter the jquery object to get results.
            $('.search tr ').filter(function(i, v) {
                var $t = $(this).children(":eq(" + "1" + ")");
                return rex.test($t.text());
            }).show();
        })

    }(jQuery));

});