$(document).ready(function(){       
    $('.your-monster .monster').click(function(e){ 
        if($(this).hasClass('select')) {
            $(this).removeClass('select');
        }
        else {
            $(this).addClass('select');
        }
    });

    $('.your-monster .monster, .other-monster .monster').click(function(e){ 
        $('.team').append(
            "<div class='monster'>" +
                "<table>" +
                    "<tr>" +
                        "<td colspan='3'>" +
                            "<img src='" + $(this).attr('src') + "'>" +
                        "</td>" +
                    "</tr>" +

                    "<tr>" +
                        "<th>HP</th>" +
                        "<td>" + $(this).attr('hp') + "</td>" +
                        "<td><span class='stat-ctn'><input type='number' class='Rhp'></span></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<th>DEF</th>" +
                        "<td>" + $(this).attr('def') + "</td>" +
                        "<td><span class='stat-ctn'><input type='number' class='Rdef'></span></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<th>ATK</th>" +
                        "<td>" + $(this).attr('atk') + "</td>" +
                        "<td><span class='stat-ctn'><input type='number' class='Ratk'></span></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<th>SPD</th>" +
                        "<td>" + $(this).attr('spd') + "</td>" +
                        "<td><span class='stat-ctn'><input type='number' class='Rspd'></span></td>" +
                    "</tr>" +

                    "<tr>" +
                        "<th>CRate</th>" +
                        "<td colspan='2'><input type='number' value='" + $(this).attr('crate') + "' class='Rcrate'></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<th>CDmg</th>" +
                        "<td colspan='2'><input type='number' value='" + $(this).attr('cdmg') + "' class='Rcdmg'></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<th>RES</th>" +
                        "<td colspan='2'><input type='number' value='" + $(this).attr('res') + "' class='Rres'></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<th>ACC</th>" +
                        "<td colspan='2'><input type='number' value='" + $(this).attr('acc') + "' class='Racc'></td>" +
                    "</tr>" +
                    
                "</table>" +
            "</div>"
        );
    });
});