import { Component, OnInit } from '@angular/core';
import { DataPointService } from '../services/data-point.service';
import { TranslateService } from '@ngx-translate/core';
import { ConnectionService } from 'ng-connection-service';

interface Country {
  name: string;
  id: string;
}
interface State {
  name: string;
  id: string;
  countryId: string;
}
interface City {
  name: string;
  id: string;
  stateID: string;
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
    { id: '1', name: 'Tunis', countryId: '217' },
    { id: '15', name: 'Sfax', countryId: '217' },
    { id: '12', name: 'Sousse', countryId: '217' },
    { id: '19', name: 'Gabes', countryId: '217' },
    { id: '16', name: 'Kairouan', countryId: '217' },
    { id: '7', name: 'Bizerte', countryId: '217' },
    { id: '22', name: 'Gafsa', countryId: '217' },
    { id: '5', name: 'Nabeul', countryId: '217' },
    { id: '2', name: 'Ariana', countryId: '217' },
    { id: '17', name: 'Kasserine', countryId: '217' },
    { id: '13', name: 'Monastir', countryId: '217' },
    { id: '21', name: 'Tataouine', countryId: '217' },
    { id: '20', name: 'Medenine', countryId: '217' },
    { id: '8', name: 'Beja', countryId: '217' },
    { id: '9', name: 'Jendouba', countryId: '217' },
    { id: '10', name: 'El Kef', countryId: '217' },
    { id: '14', name: 'Mahdia', countryId: '217' },
    { id: '18', name: 'Sidi Bouzid', countryId: '217' },
    { id: '23', name: 'Tozeur', countryId: '217' },
    { id: '11', name: 'Siliana', countryId: '217' },
    { id: '24', name: 'Kebili', countryId: '217' },
    { id: '6', name: 'Zaghouan', countryId: '217' },
    { id: '3', name: 'Ben Arous', countryId: '217' },
    { id: '4', name: 'Manouba', countryId: '217' }
  ];
  cities: City[] = [
    { id: '1111', name: 'Tunis', stateID: '1' },
    { id: '1112', name: 'Le Bardo', stateID: '1' },
    { id: '1113', name: 'Le Kram', stateID: '1' },
    { id: '1114', name: 'La Goulette', stateID: '1' },
    { id: '1115', name: 'Carthage', stateID: '1' },
    { id: '1116', name: 'Sidi Bou Said', stateID: '1' },
    { id: '1117', name: 'La Marsa', stateID: '1' },
    { id: '1118', name: 'Sidi Hassine', stateID: '1' },
    { id: '1211', name: 'Ariana', stateID: '2' },
    { id: '1212', name: 'La Soukra', stateID: '2' },
    { id: '1213', name: 'Raoued', stateID: '2' },
    { id: '1214', name: 'Kalâat el-Andalous', stateID: '2' },
    { id: '1215', name: 'Sidi Thabet', stateID: '2' },
    { id: '1216', name: 'Ettadhamen-Mnihla', stateID: '2' },
    { id: '1311', name: 'Ben Arous', stateID: '3' },
    { id: '1312', name: 'El Mourouj', stateID: '3' },
    { id: '1313', name: 'Hammam Lif', stateID: '3' },
    { id: '1314', name: 'Hammam Chott', stateID: '3' },
    { id: '1315', name: 'Bou Mhel el-Bassatine', stateID: '3' },
    { id: '1316', name: 'Ezzahra', stateID: '3' },
    { id: '1317', name: 'Radès', stateID: '3' },
    { id: '1318', name: 'Mégrine', stateID: '3' },
    { id: '1319', name: 'Mohamedia-Fouchana', stateID: '3' },
    { id: '1320', name: 'Mornag', stateID: '3' },
    { id: '1321', name: 'Khalidia', stateID: '3' },
    { id: '1411', name: 'Manouba', stateID: '4' },
    { id: '1412', name: 'Den Den', stateID: '4' },
    { id: '1413', name: 'Douar Hicher', stateID: '4' },
    { id: '1414', name: 'Oued Ellil', stateID: '4' },
    { id: '1415', name: 'Mornaguia', stateID: '4' },
    { id: '1416', name: 'Borj El Amri', stateID: '4' },
    { id: '1417', name: 'Djedeida', stateID: '4' },
    { id: '1418', name: 'Tebourba', stateID: '4' },
    { id: '1419', name: 'El Battan', stateID: '4' },
    { id: '1511', name: 'Nabeul', stateID: '5' },
    { id: '1512', name: 'Dar Chaabane', stateID: '5' },
    { id: '1513', name: 'Béni Khiar', stateID: '5' },
    { id: '1514', name: 'El Maâmoura', stateID: '5' },
    { id: '1515', name: 'Somâa', stateID: '5' },
    { id: '1516', name: 'Korba', stateID: '5' },
    { id: '1517', name: 'Tazerka', stateID: '5' },
    { id: '1518', name: 'Menzel Temime', stateID: '5' },
    { id: '1519', name: 'Menzel Horr', stateID: '5' },
    { id: '1520', name: 'El Mida', stateID: '5' },
    { id: '1521', name: 'Kelibia', stateID: '5' },
    { id: '1522', name: 'Azmour', stateID: '5' },
    { id: '1523', name: 'Hammam Ghezèze', stateID: '5' },
    { id: '1524', name: 'Dar Allouch', stateID: '5' },
    { id: '1525', name: 'El Haouaria', stateID: '5' },
    { id: '1526', name: 'Takelsa', stateID: '5' },
    { id: '1527', name: 'Soliman', stateID: '5' },
    { id: '1528', name: 'Korbous', stateID: '5' },
    { id: '1529', name: 'Menzel Bouzelfa', stateID: '5' },
    { id: '1530', name: 'Béni Khalled', stateID: '5' },
    { id: '1531', name: 'Zaouiet Djedidi', stateID: '5' },
    { id: '1532', name: 'Grombalia', stateID: '5' },
    { id: '1533', name: 'Bou Argoub', stateID: '5' },
    { id: '1534', name: 'Hammamet', stateID: '5' },
    { id: '1611', name: 'Zaghouan', stateID: '6' },
    { id: '1612', name: 'Zriba', stateID: '6' },
    { id: '1613', name: 'Bir Mcherga', stateID: '6' },
    { id: '1614', name: 'Djebel Oust', stateID: '6' },
    { id: '1615', name: 'El Fahs', stateID: '6' },
    { id: '1616', name: 'Nadhour', stateID: '6' },
    { id: '1711', name: 'Bizerte', stateID: '7' },
    { id: '1712', name: 'Sejnane', stateID: '7' },
    { id: '1713', name: 'Mateur', stateID: '7' },
    { id: '1714', name: 'Menzel Bourguiba', stateID: '7' },
    { id: '1715', name: 'Tinja', stateID: '7' },
    { id: '1716', name: 'Ghar al Milh', stateID: '7' },
    { id: '1717', name: 'Aousja', stateID: '7' },
    { id: '1718', name: 'Menzel Jemil', stateID: '7' },
    { id: '1719', name: 'Menzel Abderrahmane', stateID: '7' },
    { id: '1720', name: 'El Alia', stateID: '7' },
    { id: '1721', name: 'Ras Jebel', stateID: '7' },
    { id: '1722', name: 'Metline', stateID: '7' },
    { id: '1723', name: 'Raf Raf', stateID: '7' },
    { id: '2111', name: 'Béja', stateID: '8' },
    { id: '2112', name: 'El Maâgoula', stateID: '8' },
    { id: '2113', name: 'Zahret Medien', stateID: '8' },
    { id: '2114', name: 'Nefza', stateID: '8' },
    { id: '2115', name: 'Téboursouk', stateID: '8' },
    { id: '2116', name: 'Testour', stateID: '8' },
    { id: '2117', name: 'Goubellat', stateID: '8' },
    { id: '2118', name: 'Majaz al Bab', stateID: '8' },
    { id: '2211', name: 'Jendouba', stateID: '9' },
    { id: '2212', name: 'Bou Salem', stateID: '9' },
    { id: '2213', name: 'Tabarka', stateID: '9' },
    { id: '2214', name: 'Aïn Draham', stateID: '9' },
    { id: '2215', name: 'Fernana', stateID: '9' },
    { id: '2216', name: "Beni M'Tir", stateID: '9' },
    { id: '2217', name: 'Ghardimaou', stateID: '9' },
    { id: '2218', name: 'Oued Melliz', stateID: '9' },
    { id: '2311', name: 'El Kef', stateID: '10' },
    { id: '2312', name: 'Nebeur', stateID: '10' },
    { id: '2313', name: 'Touiref', stateID: '10' },
    { id: '2314', name: 'Sakiet Sidi Youssef', stateID: '10' },
    { id: '2315', name: 'Tajerouine', stateID: '10' },
    { id: '2316', name: 'Menzel Salem', stateID: '10' },
    { id: '2317', name: 'Kalaat es Senam', stateID: '10' },
    { id: '2318', name: 'Kalâat Khasba', stateID: '10' },
    { id: '2319', name: 'Jérissa', stateID: '10' },
    { id: '2320', name: 'El Ksour', stateID: '10' },
    { id: '2321', name: 'Dahmani', stateID: '10' },
    { id: '2322', name: 'Sers', stateID: '10' },
    { id: '2411', name: 'Siliana', stateID: '11' },
    { id: '2412', name: 'Bou Arada', stateID: '11' },
    { id: '2413', name: 'Gaâfour', stateID: '11' },
    { id: '2414', name: 'El Krib', stateID: '11' },
    { id: '2415', name: 'Sidi Bou Rouis', stateID: '11' },
    { id: '2416', name: 'Maktar', stateID: '11' },
    { id: '2417', name: 'Rouhia', stateID: '11' },
    { id: '2418', name: 'Kesra', stateID: '11' },
    { id: '2419', name: 'Bargou', stateID: '11' },
    { id: '2420', name: 'El Aroussa', stateID: '11' },
    { id: '3111', name: 'Sousse', stateID: '12' },
    { id: '3112', name: 'Ksibet Thrayet', stateID: '12' },
    { id: '3113', name: 'Ezzouhour', stateID: '12' },
    { id: '3114', name: 'Zaouiet Sousse', stateID: '12' },
    { id: '3115', name: 'Hammam Sousse', stateID: '12' },
    { id: '3116', name: 'Akouda', stateID: '12' },
    { id: '3117', name: 'Kalâa Kebira', stateID: '12' },
    { id: '3118', name: 'Sidi Bou Ali', stateID: '12' },
    { id: '3119', name: 'Hergla', stateID: '12' },
    { id: '3120', name: 'Enfidha', stateID: '12' },
    { id: '3121', name: 'Bouficha', stateID: '12' },
    { id: '3122', name: 'Sidi El Hani', stateID: '12' },
    { id: '3123', name: "M'saken", stateID: '12' },
    { id: '3124', name: 'Kalâa Seghira', stateID: '12' },
    { id: '3125', name: 'Messaadine', stateID: '12' },
    { id: '3126', name: 'Kondar', stateID: '12' },
    { id: '3211', name: 'Monastir', stateID: '13' },
    { id: '3212', name: 'Khniss', stateID: '13' },
    { id: '3213', name: 'Ouerdanin', stateID: '13' },
    { id: '3214', name: 'Sahline Moôtmar', stateID: '13' },
    { id: '3215', name: 'Sidi Ameur', stateID: '13' },
    { id: '3216', name: 'Zéramdine', stateID: '13' },
    { id: '3217', name: 'Beni Hassen', stateID: '13' },
    { id: '3218', name: 'Ghenada', stateID: '13' },
    { id: '3219', name: 'Jemmal', stateID: '13' },
    { id: '3220', name: 'Menzel Kamel', stateID: '13' },
    { id: '3221', name: 'Zaouiet Kontoch', stateID: '13' },
    { id: '3222', name: 'Bembla-Mnara', stateID: '13' },
    { id: '3223', name: 'Menzel Ennour', stateID: '13' },
    { id: '3224', name: 'El Masdour', stateID: '13' },
    { id: '3225', name: 'Moknine', stateID: '13' },
    { id: '3226', name: 'Sidi Bennour', stateID: '13' },
    { id: '3227', name: 'Menzel Farsi', stateID: '13' },
    { id: '3228', name: 'Amiret El Fhoul', stateID: '13' },
    { id: '3229', name: 'Amiret Touazra', stateID: '13' },
    { id: '3230', name: 'Amiret El Hojjaj', stateID: '13' },
    { id: '3231', name: 'Cherahil', stateID: '13' },
    { id: '3232', name: 'Bekalta', stateID: '13' },
    { id: '3233', name: 'Téboulba', stateID: '13' },
    { id: '3234', name: 'Ksar Hellal', stateID: '13' },
    { id: '3235', name: 'Ksibet El Mediouni', stateID: '13' },
    { id: '3236', name: 'Benen Bodher', stateID: '13' },
    { id: '3237', name: 'Touza', stateID: '13' },
    { id: '3238', name: 'Sayada', stateID: '13' },
    { id: '3239', name: 'Lemta', stateID: '13' },
    { id: '3240', name: 'Bouhjar', stateID: '13' },
    { id: '3241', name: 'Menzel Hayet', stateID: '13' },
    { id: '3311', name: 'Mahdia', stateID: '14' },
    { id: '3312', name: 'Rejiche', stateID: '14' },
    { id: '3313', name: 'Bou Merdes', stateID: '14' },
    { id: '3314', name: 'Ouled Chamekh', stateID: '14' },
    { id: '3315', name: 'Chorbane', stateID: '14' },
    { id: '3316', name: 'Hebira', stateID: '14' },
    { id: '3317', name: 'Essouassi', stateID: '14' },
    { id: '3318', name: 'El Djem', stateID: '14' },
    { id: '3319', name: 'Kerker', stateID: '14' },
    { id: '3320', name: 'Chebba', stateID: '14' },
    { id: '3321', name: 'Melloulèche', stateID: '14' },
    { id: '3322', name: 'Sidi Alouane', stateID: '14' },
    { id: '3323', name: 'Ksour Essef', stateID: '14' },
    { id: '3324', name: 'El Bradâa', stateID: '14' },
    { id: '3411', name: 'Sfax', stateID: '15' },
    { id: '3412', name: 'Sakiet Ezzit', stateID: '15' },
    { id: '3413', name: 'Chihia', stateID: '15' },
    { id: '3414', name: 'Sakiet Eddaïer', stateID: '15' },
    { id: '3415', name: 'Gremda', stateID: '15' },
    { id: '3416', name: 'El Ain', stateID: '15' },
    { id: '3417', name: 'Thyna', stateID: '15' },
    { id: '3418', name: 'Agareb', stateID: '15' },
    { id: '3419', name: 'Jebiniana', stateID: '15' },
    { id: '3420', name: 'El Hencha', stateID: '15' },
    { id: '3421', name: 'Menzel Chaker', stateID: '15' },
    { id: '3422', name: 'Ghraïba, Tunisia', stateID: '15' },
    { id: '3423', name: 'Bir Ali Ben Khélifa', stateID: '15' },
    { id: '3424', name: 'Skhira', stateID: '15' },
    { id: '3425', name: 'Mahares', stateID: '15' },
    { id: '3426', name: 'Kerkennah', stateID: '15' },
    { id: '4111', name: 'Kairouan', stateID: '16' },
    { id: '4112', name: 'Chebika', stateID: '16' },
    { id: '4113', name: 'Sbikha', stateID: '16' },
    { id: '4114', name: 'Oueslatia', stateID: '16' },
    { id: '4115', name: 'Aïn Djeloula', stateID: '16' },
    { id: '4116', name: 'Haffouz', stateID: '16' },
    { id: '4117', name: 'Alaâ', stateID: '16' },
    { id: '4118', name: 'Hajeb El Ayoun', stateID: '16' },
    { id: '4119', name: 'Nasrallah', stateID: '16' },
    { id: '4120', name: 'Menzel Mehiri', stateID: '16' },
    { id: '4121', name: 'Echrarda', stateID: '16' },
    { id: '4122', name: 'Bou Hajla', stateID: '16' },
    { id: '4211', name: 'Kasserine', stateID: '17' },
    { id: '4212', name: 'Sbeitla', stateID: '17' },
    { id: '4213', name: 'Sbiba', stateID: '17' },
    { id: '4214', name: 'Jedelienne', stateID: '17' },
    { id: '4215', name: 'Thala', stateID: '17' },
    { id: '4216', name: 'Haïdra', stateID: '17' },
    { id: '4217', name: 'Foussana', stateID: '17' },
    { id: '4218', name: 'Fériana', stateID: '17' },
    { id: '4219', name: 'Thélepte', stateID: '17' },
    { id: '4220', name: 'Magel Bel Abbès', stateID: '17' },
    { id: '4311', name: 'Sidi Bouzid', stateID: '18' },
    { id: '4312', name: 'Jilma', stateID: '18' },
    { id: '4313', name: 'Cebalet', stateID: '18' },
    { id: '4314', name: 'Bir El Hafey', stateID: '18' },
    { id: '4315', name: 'Sidi Ali Ben Aoun', stateID: '18' },
    { id: '4316', name: 'Menzel Bouzaiane', stateID: '18' },
    { id: '4317', name: 'Meknassy', stateID: '18' },
    { id: '4318', name: 'Mezzouna', stateID: '18' },
    { id: '4319', name: 'Regueb', stateID: '18' },
    { id: '4320', name: 'Ouled Haffouz', stateID: '18' },
    { id: '5111', name: 'Gabès', stateID: '19' },
    { id: '5112', name: 'Chenini Nahal', stateID: '19' },
    { id: '5113', name: 'Ghannouch', stateID: '19' },
    { id: '5114', name: 'Métouia', stateID: '19' },
    { id: '5115', name: 'Oudhref', stateID: '19' },
    { id: '5116', name: 'El Hamma', stateID: '19' },
    { id: '5117', name: 'Matmata', stateID: '19' },
    { id: '5118', name: 'Nouvelle Matmata', stateID: '19' },
    { id: '5119', name: 'Mareth', stateID: '19' },
    { id: '5120', name: 'Zarat', stateID: '19' },
    { id: '5211', name: 'Medenine', stateID: '20' },
    { id: '5212', name: 'Beni Khedache', stateID: '20' },
    { id: '5213', name: 'Ben Gardane', stateID: '20' },
    { id: '5214', name: 'Zarzis', stateID: '20' },
    { id: '5215', name: 'Houmt El Souk (Djerba)', stateID: '20' },
    { id: '5216', name: 'Midoun (Djerba)', stateID: '20' },
    { id: '5217', name: 'Ajim (Djerba)', stateID: '20' },
    { id: '5311', name: 'Tataouine', stateID: '21' },
    { id: '5312', name: 'Bir Lahmar', stateID: '21' },
    { id: '5313', name: 'Ghomrassen', stateID: '21' },
    { id: '5314', name: 'Dehiba', stateID: '21' },
    { id: '5315', name: 'Remada', stateID: '21' },
    { id: '6111', name: 'Gafsa', stateID: '22' },
    { id: '6112', name: 'El Ksar', stateID: '22' },
    { id: '6113', name: 'Moularès', stateID: '22' },
    { id: '6114', name: 'Redeyef', stateID: '22' },
    { id: '6115', name: 'Métlaoui', stateID: '22' },
    { id: '6116', name: 'Mdhila', stateID: '22' },
    { id: '6117', name: 'El Guettar', stateID: '22' },
    { id: '6118', name: 'Sened', stateID: '22' },
    { id: '6211', name: 'Tozeur', stateID: '23' },
    { id: '6212', name: 'Degache', stateID: '23' },
    { id: '6213', name: 'Hamet Jerid', stateID: '23' },
    { id: '6214', name: 'Nafta', stateID: '23' },
    { id: '6215', name: 'Tamerza', stateID: '23' },
    { id: '6311', name: 'Kebili', stateID: '24' },
    { id: '6312', name: 'Djemna', stateID: '24' },
    { id: '6313', name: 'Douz', stateID: '24' },
    { id: '6314', name: 'El Golâa', stateID: '24' },
    { id: '6315', name: 'Souk Lahad', stateID: '24' }
  ];
  consumption: string = '';
  gain: string = '';
  use: string = '';
  phoneInputShow: boolean = false;
  emailInputShow: boolean = false;
  spinner: boolean = false;
  done: boolean = false;
  lang_selected: boolean = true;
  locale: string = 'ar';
  stateId: string = '';
  countryId: string = '';
  night_out: boolean = false;
  noInternetComponenet: boolean = false;
  connectedComponenet: boolean = true;
  isConnected = true;
  constructor(
    private service: DataPointService,
    public translate: TranslateService,
    private connectionService: ConnectionService
  ) {
    translate.addLangs(['en', 'fr', 'ar']);
    translate.setDefaultLang('ar');
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.connectedComponenet = true;
        this.noInternetComponenet = false;
      }
    });
  }

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
    if (this.isConnected) {
      this.connectedComponenet = true;
      this.noInternetComponenet = false;
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
          this.spinner = false;
          this.done = true;
          dpForm.reset();
          let today = new Date();
          let summerSatrt = new Date(`01/05/${today.getFullYear}`);
          let summerFinish = new Date(`30/09/${today.getFullYear}`);

          if (JSON.parse(JSON.stringify(response)).energy !== 0.0) {
            if (today > summerSatrt && today < summerFinish) {
              this.consumption = (
                (JSON.parse(JSON.stringify(response)).billAmount / 365) *
                1.5
              )
                .toFixed(2)
                .toString();
              this.use = `${(
                ((JSON.parse(JSON.stringify(response)).billAmount / 365) *
                  1.5) /
                0.21
              )
                .toFixed(2)
                .toString()} kw`;
            } else {
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
            }
            this.gain = (JSON.parse(JSON.stringify(response)).energy * 0.21)
              .toFixed(2)
              .toString();
          } else {
            this.done = false;
            this.night_out = true;
          }
        });
      }
    } else {
      this.connectedComponenet = false;
      this.noInternetComponenet = true;
    }
  }

  goBackHomePage() {
    this.done = false;
    this.night_out = false;
  }

  switchLang(lang: string) {
    this.lang_selected = false;
    this.translate.use(lang);
    this.locale = lang;
  }

  filterCitiesByStateId(id: string) {
    return this.cities.filter(city => city.stateID === id);
  }

  filterStatesByCountryId(id: string) {
    return this.states.filter(state => state.countryId === id);
  }
}
