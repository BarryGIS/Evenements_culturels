var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Prfectures_1 = new ol.format.GeoJSON();
var features_Prfectures_1 = format_Prfectures_1.readFeatures(json_Prfectures_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prfectures_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prfectures_1.addFeatures(features_Prfectures_1);
var lyr_Prfectures_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Prfectures_1, 
                style: style_Prfectures_1,
                interactive: true,
    title: 'Préfectures<br />\
    <img src="styles/legend/Prfectures_1_0.png" /> Conakry<br />\
    <img src="styles/legend/Prfectures_1_1.png" /> R.A. Boké<br />\
    <img src="styles/legend/Prfectures_1_2.png" /> R.A. Faranah<br />\
    <img src="styles/legend/Prfectures_1_3.png" /> R.A. Kankan<br />\
    <img src="styles/legend/Prfectures_1_4.png" /> R.A. Kindia<br />\
    <img src="styles/legend/Prfectures_1_5.png" /> R.A. Labé<br />\
    <img src="styles/legend/Prfectures_1_6.png" /> R.A. Mamou<br />\
    <img src="styles/legend/Prfectures_1_7.png" /> R.A. N\'Zérékoré<br />'
        });
var format_Villes_2 = new ol.format.GeoJSON();
var features_Villes_2 = format_Villes_2.readFeatures(json_Villes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Villes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Villes_2.addFeatures(features_Villes_2);
var lyr_Villes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Villes_2, 
                style: style_Villes_2,
                interactive: true,
    title: 'Villes<br />\
    <img src="styles/legend/Villes_2_0.png" /> Autres lieux<br />\
    <img src="styles/legend/Villes_2_1.png" /> Lieux culturels<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Prfectures_1.setVisible(true);lyr_Villes_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Prfectures_1,lyr_Villes_2];
lyr_Prfectures_1.set('fieldAliases', {'Object_2': 'Object_2', 'Region': 'Region', 'Préfectur': 'Préfectur', });
lyr_Villes_2.set('fieldAliases', {'Prefecture': 'Prefecture', 'Lieu': 'Lieu', 'Evenement': 'Evenement', 'Date': 'Date', 'Activités': 'Activités', 'Culture': 'Culture', });
lyr_Prfectures_1.set('fieldImages', {'Object_2': 'TextEdit', 'Region': 'TextEdit', 'Préfectur': 'TextEdit', });
lyr_Villes_2.set('fieldImages', {'Prefecture': 'TextEdit', 'Lieu': 'TextEdit', 'Evenement': 'TextEdit', 'Date': 'TextEdit', 'Activités': 'TextEdit', 'Culture': 'TextEdit', });
lyr_Prfectures_1.set('fieldLabels', {'Object_2': 'no label', 'Region': 'inline label', 'Préfectur': 'inline label', });
lyr_Villes_2.set('fieldLabels', {'Prefecture': 'inline label', 'Lieu': 'inline label', 'Evenement': 'header label', 'Date': 'header label', 'Activités': 'header label', 'Culture': 'no label', });
lyr_Villes_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});