$(document).ready(function(){       
    $('.your-monster .b-monster').click(function(e){ 
        if($(this).hasClass('select')) {
            $(this).removeClass('select');
        }
        else {
            $(this).addClass('select');
        }
    });

    $('.your-monster .b-monster, .other-monster .b-monster').click(function(e){ 
        $('.t-configure').append(
            "<div class='monster'>" +
                "<span class='delete'>x</span>" +
                "<span class='name'>" + $(".monster", this).attr('name') + "</span>" +
                "<table>" +
                    "<tr>" +
                        "<td colspan='3'>" +
                            "<img src='" + $(".monster", this).attr('src') + "'>" +
                        "</td>" +
                    "</tr>" +

                    "<tr>" +
                        "<th>HP</th>" +
                        "<td class='Bhp'>" + $(".monster", this).attr('hp') + "</td>" +
                        "<td><span class='stat-ctn'><input type='number' class='Rhp'></span></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<th>DEF</th>" +
                        "<td class='Bdef'>" + $(".monster", this).attr('def') + "</td>" +
                        "<td><span class='stat-ctn'><input type='number' class='Rdef'></span></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<th>ATK</th>" +
                        "<td class='Batk'>" + $(".monster", this).attr('atk') + "</td>" +
                        "<td><span class='stat-ctn'><input type='number' class='Ratk'></span></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<th>SPD</th>" +
                        "<td class='Bspd'>" + $(".monster", this).attr('spd') + "</td>" +
                        "<td><span class='stat-ctn'><input type='number' class='Rspd'></span></td>" +
                    "</tr>" +

                    "<tr>" +
                        "<th>CRate</th>" +
                        "<td colspan='2'><input type='number' value='" + $(".monster", this).attr('crate') + "' class='Rcrate'></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<th>CDmg</th>" +
                        "<td colspan='2'><input type='number' value='" + $(".monster", this).attr('cdmg') + "' class='Rcdmg'></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<th>RES</th>" +
                        "<td colspan='2'><input type='number' value='" + $(".monster", this).attr('res') + "' class='Rres'></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<th>ACC</th>" +
                        "<td colspan='2'><input type='number' value='" + $(".monster", this).attr('acc') + "' class='Racc'></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<th class='skillUp'>Skill up S1</th>" +
                        "<td colspan='2'><input type='number' value='" + $(".monster", this).attr('skillUpSkill1') + "' class='skillUpSkill1'></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<th class='skillUp'>Skill up S2</th>" +
                        "<td colspan='2'><input type='number' value='" + $(".monster", this).attr('skillUpSkill2') + "' class='skillUpSkill2'></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<th class='skillUp'>Skill up S3</th>" +
                        "<td colspan='2'><input type='number' value='" + $(".monster", this).attr('skillUpSkill3') + "' class='skillUpSkill3'></td>" +
                    "</tr>" +
                    
                "</table>" +
            "</div>"
        );

        $('.btn-simulate').removeClass('desactivate');

        $('.team div:last-child() .delete').click(function(e){ 
            $('.monster:nth-child('+($(this).parent().index()+1)+')', '.team').remove();

            if($('.team .monster').length == 0)
                $('.btn-simulate').addClass('desactivate');
        });
    });
});