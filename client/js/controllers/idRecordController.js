app.controller('idrecordCtrl',['$scope', function($scope){

    $scope.firstname_card_disabled = false;
    $scope.lastname_card_disabled = false;
    $scope.birthdate_card_disabled = false;
    $scope.birthloc_card_disabled = false;
    $scope.nationality_card_disabled = false;
    $scope.address_card_disabled = false;
    $scope.phone_card_disabled = false;

    $scope.endDate = new Date();

    $scope.launchEdit = function(target){
        switch(target){
            case 0:
                $scope.firstname_card_disabled = true;
                break;
            case 1:
                $scope.lastname_card_disabled = true;
                break;
            case 2:
                $scope.birthdate_card_disabled = true;
                break;   
            case 3:
                $scope.birthloc_card_disabled = true;
                break;
            case 4:
                $scope.nationality_card_disabled = true;
                break;
            case 5:
                $scope.address_card_disabled = true;
                break; 
            case 6:
                $scope.phone_card_disabled = true;
                break; 

        }
    };

    $scope.confirmEdit = function(target){
        switch(target){
            case 0:
                $scope.firstname_card_disabled = false;
                break;
            case 1:
                $scope.lastname_card_disabled = false;
                break;
            case 2:
                $scope.birthdate_card_disabled = false;
                break;   
            case 3:
                $scope.birthloc_card_disabled = false;
                break;
            case 4:
                $scope.nationality_card_disabled = false;
                break;
            case 5:
                $scope.address_card_disabled = false;
                break; 
            case 6:
                $scope.phone_card_disabled = false;
                break; 

        }
    };

    $scope.cancelEdit = function(target){
        switch(target){
            case 0:
                $scope.firstname_card_disabled = false;
                break;
            case 1:
                $scope.lastname_card_disabled = false;
                break;
            case 2:
                $scope.birthdate_card_disabled = false;
                break;   
            case 3:
                $scope.birthloc_card_disabled = false;
                break;
            case 4:
                $scope.nationality_card_disabled = false;
                break;
            case 5:
                $scope.address_card_disabled = false;
                break; 
            case 6:
                $scope.phone_card_disabled = false;
                break; 

        }

    };

    $scope.nationalities = [
        { nat : "Afghan" } ,
        { nat : "Albanian" } ,
        { nat : "Algerian" } ,
        { nat : "American" } ,
        { nat : "Andorran" } ,
        { nat : "Angolan" } ,
        { nat : "Antiguan" },
        { nat : "Argentinean" } ,
        { nat : "Armenian" } ,
        { nat : "Australian" } ,
        { nat : "Austrian" } ,
        { nat : "Azerbaijani" } ,
        { nat : "Bahamian" } ,
        { nat : "Bahraini" } ,
        { nat : "Bangladeshi" } ,
        { nat : "Barbadian" } ,
        { nat : "Barbudan" },
        { nat : "Batswana" },
        { nat : "Belarusian" } ,
        { nat : "Belgian" } ,
        { nat : "Belizean" } ,
        { nat : "Beninese" } ,
        { nat : "Bhutanese" } ,
        { nat : "Bolivian" } ,
        { nat : "Bosnian" } ,
        { nat : "Brazilian" } ,
        { nat : "British" } ,
        { nat : "Bruneian" } ,
        { nat : "Bulgarian" } ,
        { nat : "Burkinabe" } ,
        { nat : "Burmese" } ,
        { nat : "Burundian" } ,
        { nat : "Cambodian" } ,
        { nat : "Cameroonian" } ,
        { nat : "Canadian" } ,
        { nat : "Cape Verdean" } ,
        { nat : "Central African" } ,
        { nat : "Chadian" } ,
        { nat : "Chilean" } ,
        { nat : "Chinese" } ,
        { nat : "Colombian" } ,
        { nat : "Comoran" } ,
        { nat : "Congolese" } ,
        { nat : "Congolese" } ,
        { nat : "Costa Rican" } ,
        { nat : "Croatian" } ,
        { nat : "Cuban" } ,
        { nat : "Cypriot" } ,
        { nat : "Czech" } ,
        { nat : "Danish" } ,
        { nat : "Djibouti" } ,
        { nat : "Dominican" } ,
        { nat : "Dominican" } ,
        { nat : "Dutch" } ,
        { nat : "Dutchman" } ,
        { nat : "Dutchwoman" } ,
        { nat : "East Timorese" } ,
        { nat : "Ecuadorean" } ,
        { nat : "Egyptian" } ,
        { nat : "Emirian" } ,
        { nat : "Equatorial Guinean" } ,
        { nat : "Eritrean" } ,
        { nat : "Estonian" } ,
        { nat : "Ethiopian" } ,
        { nat : "Fijian" } ,
        { nat : "Filipino" } ,
        { nat : "Finnish" } ,
        { nat : "French" } ,
        { nat : "Gabonese" } ,
        { nat : "Gambian" } ,
        { nat : "Georgian" } ,
        { nat : "German" } ,
        { nat : "Ghanaian" } ,
        { nat : "Greek" } ,
        { nat : "Grenadian" } ,
        { nat : "Guatemalan" } ,
        { nat : "Guinea-Bissauan" } ,
        { nat : "Guinean" } ,
        { nat : "Guyanese" } ,
        { nat : "Haitian" } ,
        { nat : "Herzegovinian" } ,
        { nat : "Honduran" } ,
        { nat : "Hungarian" } ,
        { nat : "I-Kiribati" } ,
        { nat : "Icelander" } ,
        { nat : "Indian" } ,
        { nat : "Indonesian" } ,
        { nat : "Iranian" } ,
        { nat : "Iraqi" } ,
        { nat : "Irish" } ,
        { nat : "Irish" } ,
        { nat : "Israeli" } ,
        { nat : "Italian" } ,
        { nat : "Ivorian" } ,
        { nat : "Jamaican" } ,
        { nat : "Japanese" } ,
        { nat : "Jordanian" } ,
        { nat : "Kazakhstani" } ,
        { nat : "Kenyan" } ,
        { nat : "Kittian and Nevisian" } ,
        { nat : "Kuwaiti" } ,
        { nat : "Kyrgyz" } ,
        { nat : "Laotian" } ,
        { nat : "Latvian" } ,
        { nat : "Lebanese" } ,
        { nat : "Liberian" } ,
        { nat : "Libyan" } ,
        { nat : "Liechtensteiner" } ,
        { nat : "Lithuanian" } ,
        { nat : "Luxembourger" },
        { nat : "Macedonian" } ,
        { nat : "Malagasy" },
        { nat : "Malawian" } ,
        { nat : "Malaysian" } ,
        { nat : "Maldivan" } ,
        { nat : "Malian" } ,
        { nat : "Maltese" } ,
        { nat : "Marshallese" } ,
        { nat : "Mauritanian" } ,
        { nat : "Mauritian" } ,
        { nat : "Mexican" } ,
        { nat : "Micronesian" } ,
        { nat : "Moldovan" } ,
        { nat : "Monacan" } ,
        { nat : "Mongolian" } ,
        { nat : "Moroccan" } ,
        { nat : "Mosotho" } ,
        { nat : "Motswana" } ,
        { nat : "Mozambican" } ,
        { nat : "Namibian" } ,
        { nat : "Nauruan" } ,
        { nat : "Nepalese" } ,
        { nat : "Netherlander" } ,
        { nat : "New Zealander" } ,
        { nat : "Ni-Vanuatu" } ,
        { nat : "Nicaraguan" } ,
        { nat : "Nigerian" } ,
        { nat : "Nigerien" } ,
        { nat : "North Korean" } ,
        { nat : "Northern Irish" } ,
        { nat : "Norwegian" } ,
        { nat : "Omani" } ,
        { nat : "Pakistani" } ,
        { nat : "Palauan" } ,
        { nat : "Panamanian" } ,
        { nat : "Papua New Guinean" } ,
        { nat : "Paraguayan" } ,
        { nat : "Peruvian" } ,
        { nat : "Polish" } ,
        { nat : "Portuguese" } ,
        { nat : "Qatari" } ,
        { nat : "Romanian" } ,
        { nat : "Russian" } ,
        { nat : "Rwandan" } ,
        { nat : "Saint Lucian" } ,
        { nat : "Salvadoran" } ,
        { nat : "Samoan" } ,
        { nat : "San Marinese" } ,
        { nat : "Sao Tomean" } ,
        { nat : "Saudi" } ,
        { nat : "Scottish" } ,
        { nat : "Senegalese" } ,
        { nat : "Serbian" } ,
        { nat : "Seychellois" } ,
        { nat : "Sierra Leonean" } ,
        { nat : "Singaporean" } ,
        { nat : "Slovakian" } ,
        { nat : "Slovenian" } ,
        { nat : "Solomon Islander" } ,
        { nat : "Somali" } ,
        { nat : "South African" } ,
        { nat : "South Korean" } ,
        { nat : "Spanish" } ,
        { nat : "Sri Lankan" } ,
        { nat : "Sudanese" } ,
        { nat : "Surinamer" },
        { nat : "Swazi" } ,
        { nat : "Swedish" } ,
        { nat : "Swiss" } ,
        { nat : "Syrian" } ,
        { nat : "Taiwanese" } ,
        { nat : "Tajik" },
        { nat : "Tanzanian" } ,
        { nat : "Thai" } ,
        { nat : "Togolese" } ,
        { nat : "Tongan" } ,
        { nat : "Trinidadian or Tobagonian" } ,
        { nat : "Tunisian" } ,
        { nat : "Turkish" } ,
        { nat : "Tuvaluan" } ,
        { nat : "Ugandan" } ,
        { nat : "Ukrainian" } ,
        { nat : "Uruguayan" } ,
        { nat : "Uzbekistani" } ,
        { nat : "Venezuelan" } ,
        { nat : "Vietnamese" } ,
        { nat : "Welsh" } ,
        { nat : "Welsh" } ,
        { nat : "Yemenite" } ,
        { nat : "Zambian" } ,
        { nat : "Zimbabwean" }
    ];

    $(document).ready(function(){
      $('.carousel').carousel();
       $('.tooltipped').tooltip({delay: 50});
       $('.modal').modal();
    });

    var nb_idPics = 0;
    
    $("#upload_link").on('click', function(e){
        e.stopImmediatePropagation();
        $("#upload:hidden").trigger('click');
    });
    
    $("#upload").on('change', function(e){
        e.stopImmediatePropagation();
        
        var files = e.target.files;
        // FileReader support
        if (FileReader && files && files.length) {
            var fr = new FileReader();
            fr.onload = function (evt) {
                $('.carousel').prepend("<a class='carousel-item tooltipped' data-position='right' data-delay='50' data-tooltip='Click for more infos..' href='#picSettingsModal'>"+
                "<img class='id_Pics' id='idPics_"+nb_idPics+"' src='"+evt.target.result+"'></a>");
                $('.tooltipped').tooltip({delay: 50});
                $('.carousel').removeClass('initialized');
                $('.carousel').carousel();
                $('.modal').modal({
                    dismissible: true, // Modal can be dismissed by clicking outside of the modal
                    opacity: .5, // Opacity of modal background
                    inDuration: 300, // Transition in duration
                    outDuration: 200, // Transition out duration
                    startingTop: '4%', // Starting top style attribute
                    endingTop: '10%', // Ending top style attribute
                    ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
                        //Remplir les infos du modal
                        console.log(modal, trigger);
                    }});
                nb_idPics++;

                /*$(".id_Pics").hover(
                    function(){
                        $(".id_PicSettings").css("display","block");
                    },
                    function(){
                        $(".id_PicSettings").css("display","none");
                    }
                );  */
            }
            fr.readAsDataURL(files[0]);
        }

    });
        
  


}]);