import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../class/skills';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.scss']
})
export class SkillComponentComponent implements OnInit {
  skill: Skill

  @Input() name;
  @Input() logo;
  @Input() site;


  constructor() { }

  ngOnInit() {
  }

}
