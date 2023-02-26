import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-liks',
  templateUrl: './cv-liks.component.html',
  styleUrls: ['./cv-liks.component.css']
})
export class CvLiksComponent implements OnInit {

  constructor() { }

  cvLinksArray = [{ link: 'https://www.ness-tech.co.il/careers/?area=11', name: 'נס טכנולוגיות' },
  { link: 'https://www.jobmaster.co.il/', name: 'jobmaster' },
  { link: 'https://www.jobkarov.com', name: 'jobKarov' },
  { link: 'https://www.elipaz.com/%D7%93%D7%A8%D7%95%D7%A9%D7%99%D7%9D/', name: 'אליפז תוכנה' },
  { link: 'https://www.alljobs.co.il/SearchResultsGuest.aspx?page=1&position=1215,1203,1710,1692,1759,1152,1758,1712&type=&source=491&duration=0&exc=&region=', name: 'all jobs' },
  { link: 'https://entrypoint.co.il/jobs-he/', name: 'entrypoint' },
  { link: 'https://www.jobnet.co.il/jobs?subprofid=1525,1472,1518,1520,987,1119&checkarea=3', name: 'jobnet' },
  { link: 'https://il.indeed.com/', name: 'indeed' },
  { link: 'https://www.drushim.co.il/', name: 'דרושים IL' },
  { link: 'http://www.glatjobs.co.il/', name: 'glat jobs' },
  { link: 'https://www.nisha.co.il/', name: 'nisha' },
  { link: 'https://www.glassdoor.com/Job', name: 'glassdoor' },
  { link: 'https://www.gotfriends.co.il/', name: 'got friends' },
  { link: 'https://www.xplace.com/il/dev/cobol/jobs', name: 'xplace' },
  { link: 'https://www.neto.live/#/JobsWorker', name: 'neto' },
  { link: 'https://www.careerjet.co.il/cobol-%D7%93%D7%A8%D7%95%D7%A9%D7%99%D7%9D.html', name: 'careerjet' },
  { link: 'https://www.mploy.co.il/', name: 'mploy' },
  { link: 'https://www.hotjob.co.il/cshowfirm.asp?ID=3514', name: 'hotjob' },
  { link: 'https://ethosia.co.il/', name: 'ethosia' },
  { link: 'https://b.log-on.com/%d7%97%d7%99%d7%a4%d7%95%d7%a9-%d7%9e%d7%a9%d7%a8%d7%95%d7%aa/', name: 'log on' },
  { link: 'https://jobs.kedemcenter.co.il/', name: 'קדם' },
  { link: 'https://jobs.eu.lever.co/mobileye?lever-via=O5yMYIYtdu', name: 'mobileye' },
  { link: 'https://lp.vp4.me/xfxh', name: 'מידי' },
  { link: 'https://www.sqlink.com/career/%D7%A4%D7%99%D7%AA%D7%95%D7%97-%D7%AA%D7%95%D7%9B%D7%A0%D7%94-webmobile/', name: 'sqlink' },
  { link: 'https://dicomano-labs.com/%d7%a7%d7%a8%d7%99%d7%99%d7%a8%d7%94/', name: 'קריירה' },
  { link: 'https://app.linkatch.com/companies/ness/jobs/HJpb-7J-i?r=ryChEkhb5', name: 'נס 2' },
  { link: 'https://www.comeet.com/jobs/inmanage/B7.006', name: 'inmanage' },
  { link: 'https://jobs.intel.com/ShowJob/Id/3525223', name: 'אינטל' },
  { link: 'https://jobs.workable.com/', name: 'workable' },
  { link: 'https://www.malamteam.com', name: 'מלם' },
  { link: 'https://www.aman.co.il/careers/', name: 'אמן' },
  { link: 'https://www.yotpo.com/careers/', name: 'yotpo' },
  { link: 'https://www.noga-iso.co.il/jobs/', name: 'נגה' },
  { link: 'https://jobs.dell.com/search-jobs/Israel/375/2/294640/31x5/34x75/50/2', name: 'dell' },
  { link: 'https://www.comeet.com/jobs/crossriver/C7.00F?coref=1.10.r33_303&t=1666075563367', name: 'cross river' },
  { link: 'https://www.jifiti.com/jobs/?coref=1.10.rDD_906&t=1666204680894', name: 'jifiti' },
  { link: 'https://www.extreme.co.il/', name: 'extreme' },
  { link: 'https://boards.greenhouse.io/bluevine?gh_src=9f0492803us', name: 'bluevine' },
  { link: 'https://skai.io/company/careers/tel-aviv-israel/', name: 'skai' },
  { link: 'https://www.comeet.com/jobs/abra-web-mobile/D3.004', name: 'abra' },
  { link: 'https://jobs.kedemcenter.co.il/post-a-job/', name: 'קדם' },
  { link: 'https://www.referraljoe.com/', name: 'referral' },
  { link: 'https://il.indeed.com/?r=us', name: 'indeed' },
  { link: 'https://www.glassdoor.com/member/home/index.htm', name: 'glassdoor' },
  { link: 'https://www.misrot.com/jobs/', name: 'misrot' },
  { link: 'https://haredi-women-in-hi-tech.mobilize.io/registrations/groups/32066', name: 'haredi-women' },
  { link: 'https://www.matrix.co.il/jobs/', name: 'מטריקס' },
  { link: 'https://career.rafael.co.il/', name: 'רפאל' },
  { link: 'https://www.unitask-inc.com/career/jobs/', name: 'יוניטסק' },
  { link: 'https://www.korentec.co.il/hitech-jobs/', name: 'korentec' },
  { link: 'https://www.techventure.co.il/activities', name: 'המיזם הלאוי לשילוב חרדים בהיטק' },
  { link: 'https://www.dialog.co.il/high-tech/jobs/software/full-stack-developer', name: 'dialog' },
  { link: 'https://horizontech.co.il/%d7%a9%d7%99%d7%a8%d7%95%d7%aa%d7%99%d7%9d/%d7%a7%d7%a8%d7%99%d7%99%d7%a8%d7%94/', name: 'horizontech' },
  { link: 'https://www.techjob.co.il/jobs-lobby/software/full-stack', name: 'techjob' },
  { link: 'https://mprest.com/mprest_careers/', name: 'mprest' },
  { link: 'https://www.pandatech.co.il/he/Jobs/149', name: 'pandatech' },
  // { link: '', name: '' },
  // { link: '', name: '' },
  // { link: '', name: '' },
  // { link: '', name: '' },
  ]

  ngOnInit(): void {
  }

}
