<template>
  <div class="preguntas">
      <h1>Preguntas en el catastro Marques de la Ensenada (1750-53)</h1>
      <a class="btn btn-primary" role="button" v-on:click="backToPortrait()">Volver a portada</a>
      <div class="panel panel-default">
        <div class="panel-body">
        <ol class="text-justify">
          <li>
            Cómo se llama la población  
          </li>
          <li>
            Si es de realengo o de señorío, a quién pertenece, qué derechos percibe y cuánto produce.
          </li>
          <li>
            Qué territorio ocupa el término, que distancia hay de norte a sur y de este a oeste, y cuánto de perímetro, medido en horas, y leguas. Con qué territorios confronta y qué figura tiene, dibujándola al margen.
          </li>
          <li>
            Qué especies de tierra se hallan en el término; si de regadío y de secano, distinguiendo si son de hortaliza, sembradura, viñas, pastos, bosques, matorrales, montes, y demás que pudiere haber, explicando si hay algunas que produzcan mas de una cosecha al año, las que fructificaren sola una y las que necesitan de un año de intermedio de descanso. Si se hace rotación de cultivos.
          </li>
          <li>
            De cuántas calidades de tierra hay en cada una de las especies declaradas, si de buena, mediana e inferior. 
          </li>
          <li>
            Si en las tierras que han declarado, hay plantados árboles como frutales, moreras, olivos,  castaños, nogales higueras, almendros, parras, algarrobos, etc.
          </li>
          <li>
            En que tierras están plantados los árboles antes declarados.
          </li>
          <li>
            Como se configuran los plantíos, si extendidos en toda la tierra en  márgenes,   alineados en  una, dos, tres hileras, o en la forma que estuvieren
          </li>
          <li>
            Que medidas de tierra se usa en aquel pueblo: de cuántos pasos, varas castellanas o en su caso medidas propias del lugar. Qué cantidad de cada especie de granos de los que se cogen en el término se siembra en cada una.
          </li>
          <li>
            Qué número de medidas de tierra hay en el término, distinguiendo las de cada especie y calidad, por ejemplo, cuantas fanegas, celemines o cuartillos tiene la medida de tierra de sembradura de la mejor calidad, cuantas de mediana bondad y cuantas de inferior; y lo mismo en las demás especies que hubieren declarado.
          </li>
          <li>
            Qué especies de frutos se cogen en el término
          </li>
          <li>
            Qué cantidad de frutos de cada género, de media en varios años, produce, con una ordinaria cultura, una medida de tierra de cada especie y calidad de las que hubiere en el término, sin comprender el producto de los árboles que hubiese.
          </li>
          <li>
            Qué producto se regula darán por medida de tierra los arboles que hubiere, según la forma en que estuviese hecho el plantío, cada uno en su especie.
          </li>
          <li>
            Qué valor tienen ordinariamente un año con otro los frutos que producen las tierras del término, cada calidad de ellos.
          </li>
          <li>
            Qué derechos se hallan impuestos sobre las tierras del término, como diezmo, primicia, tercio-diezmo u otros; y a quien pertenecen.
          </li>
          <li>
            A qué cantidad de frutos suelen montar los referidos derechos de cada especie o a que precio suelen arrendarse un año con otro.
          </li>
          <li>
            Si hay algunas minas, salina, molinos harineros u de papel, batanes u otros artefactos en el término, distinguiendo de qué metales y de qué uso, explicando sus dueños y lo que se regula produce cada uno de utilidad al año.
          </li>
          <li>
            Si hay algún esquilmo en el término, a quien pertenece, qué número de ganado viene al esquileo a él y que utilidad se regula da a su dueño cada año.
          </li>
          <li>
            Si hay colmenas en el término, cuántas y a quien pertenecen.
          </li>
          <li>
            De qué especies de ganado hay en el pueblo y término, excluyendo las mulas de coche y caballos de regalo; y si algún vecino tiene cabaña o yeguada que pasta fuera del término, donde y de qué número de cabezas, explicando el nombre del dueño.
          </li>
          <li>De qué número de vecinos se compone la población y cuántos en la casas de campo o alquerías.
          </li>
          <li>Cuántas casas habrá en el pueblo, qué número de inhabitables, cuántas arruinadas; y si es de señorío, explicar si tienen cada una alguna
            carga que pague al dueño por el establecimiento del suelo, y cuánto.</li>
          <li>Qué propios tiene el común y a que asciende su producto al año, de que se deberá pedir justificación.</li>
          <li>Si el común disfruta algún arbitrio, sisa u otra cosa, de que se deberá pedir la concesión, quedándose con copia que acompañe estas
             diligencias; qué cantidad produce cada uno al año, a que fin se concedió, sobre qué especies para conocer si es temporal o perpetuo y
             si su producto cubre o excede de su aplicación.</li>
          <li>Que gastos debe satisfacer el común, como salario de Justicia y regidores, fiestas de Corpus u otras; empedrado, fuentes, sirvientes,
             etc., de que se deberá pedir individual razón.</li>
          <li>Que cargos de Justicia tiene el común, como censos, que responda u otros, su importe, por qué motivo y a quien, de que se deberá pedir
            puntual noticia.</li>
          <li>Si está cargado de servicio ordinario y extraordinario u otros, de que igualmente se debe pedir individual razón.</li>
          <li>Si hay algún empleo, alcabala u otras rentas enajenadas, a quién, si fue por servicio pecuniario u otro motivo, de cuánto fue y lo
            que produce cada uno al año, de que se deberán pedir los títulos y quedarse con copia.</li>
          <li>Cuántas tabernas, mesones, tiendas, panaderías, carnicerías, puentes, barcas sobre ríos, mercados, ferias, etc. hay en la población.</li>
          <li>Si hay hospitales, de qué calidad, qué renta tienen y de qué se mantienen.</li>
          <li>Si hay algún cambista, mercader de por mayor o quien beneficie su caudal por mano de corredor u otra persona, con lucro e interés;
            y qué utilidad se considera el puede resultar a cada uno al año.</li>
          <li>Si en el pueblo hay algún tendero de paños, ropas de oro, plata y seda, lienzos, especería u otras mercaderias, médicos,
            cirujanos, boticarios, escribanos, arrieros, etc. y qué ganancia se regula puede tener cada uno al año</li>
          <li>Qué ocupaciones de artes mecánicos hay en el pueblo, con distinción, como albañiles, canteros, albéitares, herreros, sogueros,
            zapateros, sastres, pelaires, tejedores, sombrereros, manguiteros y guanteros, etc.; explicando en cada oficio de los que hubiere,
            el número que haya de maestros oficiales y aprendices, y qué utilidad le puede resultar, trabajando meramente de su oficio, al día cada uno.</li>
          <li>Si hay entre los artistas alguno, que teniendo caudal, haga prevención de materiales correspondientes a su propio oficio o a
            otros, para vender a los demás, o hiciere algún otro comercio, o entrase en arrendamientos; explicar quienes, y la utilidad que
            consideren le puede quedar al año a cada uno de los que hubiese.</li>
          <li>Qué número de jornaleros habrá en el pueblo y a cómo se paga el jornal diario a cada uno.</li>
          <li>Cuantos pobres de solemnidad habrá en la población.</li>
          <li>Si hay algunos individuos que tengan embarcaciones, que naveguen en la mar o ríos, su porta, o para pescar; cuántas, a quien pertenecen
             y que utilidad se considera da cada una a su dueño al año.</li>
          <li>Cuántos clérigos hay en el pueblo.</li>
          <li>Si hay algunos conventos, de qué religiones y sexo, y qué número de cada uno.</li>
          <li>Si el rey tiene en el término o pueblo alguna finca o renta, que no corresponda a las generales ni a las provinciales, que
            deben extinguirse; cuáles son, cómo se administran y cuánto producen.</li>
        </ol>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'catastro',
  components : {},
  methods: {
    backToPortrait: function() {
      this.$router.replace({path:"/"});
    }
  }
}
</script>

<style>
.panel {
  margin: 50px;
}
.panel-body {
  padding: 50px;
}
li{
  margin: 5px;
}
</style>
