import { Component, OnInit } from '@angular/core';
import { DataPointService } from '../services/data-point.service';

interface Country {
  name: string;
  id: string;
}
interface State {
  name: string;
  id: string;
}
interface City {
  name: string;
  id: string;
}
export class DataPoint {
  constructor(
    public area: number,
    public bill1: number,
    public bill2: number,
    public bill3: number,
    public bill4: number,
    public cityId: string,
    public countryId: string,
    public stateId: string,
    public phone?: string,
    public email?: string,
    public period?: number
  ) {}
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  countries: Country[] = [{ name: 'Tunisie', id: '217' }];
  states: State[] = [
    { id: '1', name: 'Tunis' },
    { id: '2', name: 'Sfax' },
    { id: '3', name: 'Sousse' },
    { id: '4', name: 'Gabes' },
    { id: '5', name: 'Kairouan' },
    { id: '6', name: 'Bizerte' },
    { id: '7', name: 'Gafsa' },
    { id: '8', name: 'Nabeul' },
    { id: '9', name: 'Ariana' },
    { id: '10', name: 'Kasserine' },
    { id: '11', name: 'Monastir' },
    { id: '12', name: 'Tataouine' },
    { id: '13', name: 'Medenine' },
    { id: '14', name: 'Beja' },
    { id: '15', name: 'Jendouba' },
    { id: '16', name: 'El Kef' },
    { id: '17', name: 'Mahdia' },
    { id: '18', name: 'Sidi Bouzid' },
    { id: '19', name: 'Tozeur' },
    { id: '20', name: 'Siliana' },
    { id: '21', name: 'Kebili' },
    { id: '22', name: 'Zaghouan' },
    { id: '23', name: 'Ben Arous' },
    { id: '24', name: 'Manouba' }
  ];
  cities: City[] = [
    { id: '1111', name: 'Tunis' },
    { id: '1112', name: 'Le Bardo' },
    { id: '1113', name: 'Le Kram' },
    { id: '1114', name: 'La Goulette' },
    { id: '1115', name: 'Carthage' },
    { id: '1116', name: 'Sidi Bou Said' },
    { id: '1117', name: 'La Marsa' },
    { id: '1118', name: 'Sidi Hassine' },
    { id: '1211', name: 'Ariana' },
    { id: '1212', name: 'La Soukra' },
    { id: '1213', name: 'Raoued' },
    { id: '1214', name: 'Kalâat el-Andalous' },
    { id: '1215', name: 'Sidi Thabet' },
    { id: '1216', name: 'Ettadhamen-Mnihla' },
    { id: '1311', name: 'Ben Arous' },
    { id: '1312', name: 'El Mourouj' },
    { id: '1313', name: 'Hammam Lif' },
    { id: '1314', name: 'Hammam Chott' },
    { id: '1315', name: 'Bou Mhel el-Bassatine' },
    { id: '1316', name: 'Ezzahra' },
    { id: '1317', name: 'Radès' },
    { id: '1318', name: 'Mégrine' },
    { id: '1319', name: 'Mohamedia-Fouchana' },
    { id: '1320', name: 'Mornag' },
    { id: '1321', name: 'Khalidia' },
    { id: '1411', name: 'Manouba' },
    { id: '1412', name: 'Den Den' },
    { id: '1413', name: 'Douar Hicher' },
    { id: '1414', name: 'Oued Ellil' },
    { id: '1415', name: 'Mornaguia' },
    { id: '1416', name: 'Borj El Amri' },
    { id: '1417', name: 'Djedeida' },
    { id: '1418', name: 'Tebourba' },
    { id: '1419', name: 'El Battan' },
    { id: '1511', name: 'Nabeul' },
    { id: '1512', name: 'Dar Chaabane' },
    { id: '1513', name: 'Béni Khiar' },
    { id: '1514', name: 'El Maâmoura' },
    { id: '1515', name: 'Somâa' },
    { id: '1516', name: 'Korba' },
    { id: '1517', name: 'Tazerka' },
    { id: '1518', name: 'Menzel Temime' },
    { id: '1519', name: 'Menzel Horr' },
    { id: '1520', name: 'El Mida' },
    { id: '1521', name: 'Kelibia' },
    { id: '1522', name: 'Azmour' },
    { id: '1523', name: 'Hammam Ghezèze' },
    { id: '1524', name: 'Dar Allouch' },
    { id: '1525', name: 'El Haouaria' },
    { id: '1526', name: 'Takelsa' },
    { id: '1527', name: 'Soliman' },
    { id: '1528', name: 'Korbous' },
    { id: '1529', name: 'Menzel Bouzelfa' },
    { id: '1530', name: 'Béni Khalled' },
    { id: '1531', name: 'Zaouiet Djedidi' },
    { id: '1532', name: 'Grombalia' },
    { id: '1533', name: 'Bou Argoub' },
    { id: '1534', name: 'Hammamet' },
    { id: '1611', name: 'Zaghouan' },
    { id: '1612', name: 'Zriba' },
    { id: '1613', name: 'Bir Mcherga' },
    { id: '1614', name: 'Djebel Oust' },
    { id: '1615', name: 'El Fahs' },
    { id: '1616', name: 'Nadhour' },
    { id: '1711', name: 'Bizerte' },
    { id: '1712', name: 'Sejnane' },
    { id: '1713', name: 'Mateur' },
    { id: '1714', name: 'Menzel Bourguiba' },
    { id: '1715', name: 'Tinja' },
    { id: '1716', name: 'Ghar al Milh' },
    { id: '1717', name: 'Aousja' },
    { id: '1718', name: 'Menzel Jemil' },
    { id: '1719', name: 'Menzel Abderrahmane' },
    { id: '1720', name: 'El Alia' },
    { id: '1721', name: 'Ras Jebel' },
    { id: '1722', name: 'Metline' },
    { id: '1723', name: 'Raf Raf' },
    { id: '2111', name: 'Béja' },
    { id: '2112', name: 'El Maâgoula' },
    { id: '2113', name: 'Zahret Medien' },
    { id: '2114', name: 'Nefza' },
    { id: '2115', name: 'Téboursouk' },
    { id: '2116', name: 'Testour' },
    { id: '2117', name: 'Goubellat' },
    { id: '2118', name: 'Majaz al Bab' },
    { id: '2211', name: 'Jendouba' },
    { id: '2212', name: 'Bou Salem' },
    { id: '2213', name: 'Tabarka' },
    { id: '2214', name: 'Aïn Draham' },
    { id: '2215', name: 'Fernana' },
    { id: '2216', name: "Beni M'Tir" },
    { id: '2217', name: 'Ghardimaou' },
    { id: '2218', name: 'Oued Melliz' },
    { id: '2311', name: 'El Kef' },
    { id: '2312', name: 'Nebeur' },
    { id: '2313', name: 'Touiref' },
    { id: '2314', name: 'Sakiet Sidi Youssef' },
    { id: '2315', name: 'Tajerouine' },
    { id: '2316', name: 'Menzel Salem' },
    { id: '2317', name: 'Kalaat es Senam' },
    { id: '2318', name: 'Kalâat Khasba' },
    { id: '2319', name: 'Jérissa' },
    { id: '2320', name: 'El Ksour' },
    { id: '2321', name: 'Dahmani' },
    { id: '2322', name: 'Sers' },
    { id: '2411', name: 'Siliana' },
    { id: '2412', name: 'Bou Arada' },
    { id: '2413', name: 'Gaâfour' },
    { id: '2414', name: 'El Krib' },
    { id: '2415', name: 'Sidi Bou Rouis' },
    { id: '2416', name: 'Maktar' },
    { id: '2417', name: 'Rouhia' },
    { id: '2418', name: 'Kesra' },
    { id: '2419', name: 'Bargou' },
    { id: '2420', name: 'El Aroussa' },
    { id: '3111', name: 'Sousse' },
    { id: '3112', name: 'Ksibet Thrayet' },
    { id: '3113', name: 'Ezzouhour' },
    { id: '3114', name: 'Zaouiet Sousse' },
    { id: '3115', name: 'Hammam Sousse' },
    { id: '3116', name: 'Akouda' },
    { id: '3117', name: 'Kalâa Kebira' },
    { id: '3118', name: 'Sidi Bou Ali' },
    { id: '3119', name: 'Hergla' },
    { id: '3120', name: 'Enfidha' },
    { id: '3121', name: 'Bouficha' },
    { id: '3122', name: 'Sidi El Hani' },
    { id: '3123', name: "M'saken" },
    { id: '3124', name: 'Kalâa Seghira' },
    { id: '3125', name: 'Messaadine' },
    { id: '3126', name: 'Kondar' },
    { id: '3211', name: 'Monastir' },
    { id: '3212', name: 'Khniss' },
    { id: '3213', name: 'Ouerdanin' },
    { id: '3214', name: 'Sahline Moôtmar' },
    { id: '3215', name: 'Sidi Ameur' },
    { id: '3216', name: 'Zéramdine' },
    { id: '3217', name: 'Beni Hassen' },
    { id: '3218', name: 'Ghenada' },
    { id: '3219', name: 'Jemmal' },
    { id: '3220', name: 'Menzel Kamel' },
    { id: '3221', name: 'Zaouiet Kontoch' },
    { id: '3222', name: 'Bembla-Mnara' },
    { id: '3223', name: 'Menzel Ennour' },
    { id: '3224', name: 'El Masdour' },
    { id: '3225', name: 'Moknine' },
    { id: '3226', name: 'Sidi Bennour' },
    { id: '3227', name: 'Menzel Farsi' },
    { id: '3228', name: 'Amiret El Fhoul' },
    { id: '3229', name: 'Amiret Touazra' },
    { id: '3230', name: 'Amiret El Hojjaj' },
    { id: '3231', name: 'Cherahil' },
    { id: '3232', name: 'Bekalta' },
    { id: '3233', name: 'Téboulba' },
    { id: '3234', name: 'Ksar Hellal' },
    { id: '3235', name: 'Ksibet El Mediouni' },
    { id: '3236', name: 'Benen Bodher' },
    { id: '3237', name: 'Touza' },
    { id: '3238', name: 'Sayada' },
    { id: '3239', name: 'Lemta' },
    { id: '3240', name: 'Bouhjar' },
    { id: '3241', name: 'Menzel Hayet' },
    { id: '3311', name: 'Mahdia' },
    { id: '3312', name: 'Rejiche' },
    { id: '3313', name: 'Bou Merdes' },
    { id: '3314', name: 'Ouled Chamekh' },
    { id: '3315', name: 'Chorbane' },
    { id: '3316', name: 'Hebira' },
    { id: '3317', name: 'Essouassi' },
    { id: '3318', name: 'El Djem' },
    { id: '3319', name: 'Kerker' },
    { id: '3320', name: 'Chebba' },
    { id: '3321', name: 'Melloulèche' },
    { id: '3322', name: 'Sidi Alouane' },
    { id: '3323', name: 'Ksour Essef' },
    { id: '3324', name: 'El Bradâa' },
    { id: '3411', name: 'Sfax' },
    { id: '3412', name: 'Sakiet Ezzit' },
    { id: '3413', name: 'Chihia' },
    { id: '3414', name: 'Sakiet Eddaïer' },
    { id: '3415', name: 'Gremda' },
    { id: '3416', name: 'El Ain' },
    { id: '3417', name: 'Thyna' },
    { id: '3418', name: 'Agareb' },
    { id: '3419', name: 'Jebiniana' },
    { id: '3420', name: 'El Hencha' },
    { id: '3421', name: 'Menzel Chaker' },
    { id: '3422', name: 'Ghraïba, Tunisia' },
    { id: '3423', name: 'Bir Ali Ben Khélifa' },
    { id: '3424', name: 'Skhira' },
    { id: '3425', name: 'Mahares' },
    { id: '3426', name: 'Kerkennah' },
    { id: '4111', name: 'Kairouan' },
    { id: '4112', name: 'Chebika' },
    { id: '4113', name: 'Sbikha' },
    { id: '4114', name: 'Oueslatia' },
    { id: '4115', name: 'Aïn Djeloula' },
    { id: '4116', name: 'Haffouz' },
    { id: '4117', name: 'Alaâ' },
    { id: '4118', name: 'Hajeb El Ayoun' },
    { id: '4119', name: 'Nasrallah' },
    { id: '4120', name: 'Menzel Mehiri' },
    { id: '4121', name: 'Echrarda' },
    { id: '4122', name: 'Bou Hajla' },
    { id: '4211', name: 'Kasserine' },
    { id: '4212', name: 'Sbeitla' },
    { id: '4213', name: 'Sbiba' },
    { id: '4214', name: 'Jedelienne' },
    { id: '4215', name: 'Thala' },
    { id: '4216', name: 'Haïdra' },
    { id: '4217', name: 'Foussana' },
    { id: '4218', name: 'Fériana' },
    { id: '4219', name: 'Thélepte' },
    { id: '4220', name: 'Magel Bel Abbès' },
    { id: '4311', name: 'Sidi Bouzid' },
    { id: '4312', name: 'Jilma' },
    { id: '4313', name: 'Cebalet' },
    { id: '4314', name: 'Bir El Hafey' },
    { id: '4315', name: 'Sidi Ali Ben Aoun' },
    { id: '4316', name: 'Menzel Bouzaiane' },
    { id: '4317', name: 'Meknassy' },
    { id: '4318', name: 'Mezzouna' },
    { id: '4319', name: 'Regueb' },
    { id: '4320', name: 'Ouled Haffouz' },
    { id: '5111', name: 'Gabès' },
    { id: '5112', name: 'Chenini Nahal' },
    { id: '5113', name: 'Ghannouch' },
    { id: '5114', name: 'Métouia' },
    { id: '5115', name: 'Oudhref' },
    { id: '5116', name: 'El Hamma' },
    { id: '5117', name: 'Matmata' },
    { id: '5118', name: 'Nouvelle Matmata' },
    { id: '5119', name: 'Mareth' },
    { id: '5120', name: 'Zarat' },
    { id: '5211', name: 'Medenine' },
    { id: '5212', name: 'Beni Khedache' },
    { id: '5213', name: 'Ben Gardane' },
    { id: '5214', name: 'Zarzis' },
    { id: '5215', name: 'Houmt El Souk (Djerba)' },
    { id: '5216', name: 'Midoun (Djerba)' },
    { id: '5217', name: 'Ajim (Djerba)' },
    { id: '5311', name: 'Tataouine' },
    { id: '5312', name: 'Bir Lahmar' },
    { id: '5313', name: 'Ghomrassen' },
    { id: '5314', name: 'Dehiba' },
    { id: '5315', name: 'Remada' },
    { id: '6111', name: 'Gafsa' },
    { id: '6112', name: 'El Ksar' },
    { id: '6113', name: 'Moularès' },
    { id: '6114', name: 'Redeyef' },
    { id: '6115', name: 'Métlaoui' },
    { id: '6116', name: 'Mdhila' },
    { id: '6117', name: 'El Guettar' },
    { id: '6118', name: 'Sened' },
    { id: '6211', name: 'Tozeur' },
    { id: '6212', name: 'Degache' },
    { id: '6213', name: 'Hamet Jerid' },
    { id: '6214', name: 'Nafta' },
    { id: '6215', name: 'Tamerza' },
    { id: '6311', name: 'Kebili' },
    { id: '6312', name: 'Djemna' },
    { id: '6313', name: 'Douz' },
    { id: '6314', name: 'El Golâa' },
    { id: '6315', name: 'Souk Lahad' }
  ];
  consumption: string = 'نحن في انتظار بيانات الاستمارة الخاصة بك';
  gain: string = 'نحن في انتظار بيانات الاستمارة الخاصة بك';
  use: string = 'نحن في انتظار بيانات الاستمارة الخاصة بك';
  phoneInputShow: boolean = false;
  emailInputShow: boolean = false;
  spinner: boolean = false;

  constructor(private service: DataPointService) {}

  ngOnInit() {}
  onCheckboxChange(e: { source: { id: string }; checked: boolean }) {
    if (e.source.id === 'phone-checkbox') {
      this.phoneInputShow = e.checked;
    }
    if (e.source.id === 'email-checkbox') {
      this.emailInputShow = e.checked;
    }
  }
  createDataPoint(dpForm: any) {
    if (dpForm.form.status === 'VALID') {
      this.spinner = true;
      let dataPoint = new DataPoint(
        dpForm.form.value.area,
        dpForm.form.value.bill1,
        dpForm.form.value.bill2,
        dpForm.form.value.bill3,
        dpForm.form.value.bill4,
        dpForm.form.value.city,
        dpForm.form.value.country,
        dpForm.form.value.state,
        dpForm.form.value.phone,
        dpForm.form.value.email,
        dpForm.form.value.period
      );
      this.service.createDataPoint(dataPoint).subscribe(response => {
        console.log(JSON.parse(JSON.stringify(response)).billAmount);
        this.spinner = false;
        this.consumption = (
          JSON.parse(JSON.stringify(response)).billAmount / 365
        )
          .toFixed(2)
          .toString();
        this.use = `${(
          JSON.parse(JSON.stringify(response)).billAmount /
          365 /
          0.21
        )
          .toFixed(2)
          .toString()} kw`;

        if (JSON.parse(JSON.stringify(response)).energy !== 0.0) {
          this.gain = (JSON.parse(JSON.stringify(response)).energy * 0.21)
            .toFixed(2)
            .toString();
        } else {
          this.gain =
            'إنه الليل بالخارج ، لذا لا يمكننا تلبية طلبك في هذه اللحظة';
        }
      });
    }
  }
}
