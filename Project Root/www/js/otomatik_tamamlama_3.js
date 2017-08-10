  $( function() {
    var availableTags = ["nefes darlığı","siyanoz","santral siyanoz","periferik siyanoz", "ağız kuruluğu", "ateş", "bulantı","halsizlik", "karın ağrısı", "kusma", "polidipsi", "poliüri",];
    $( "#semptomgir" ).autocomplete({
      source: availableTags
    });
  } );