import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

type Skill = { name: string; level: number };
type SkillGroup = { key: string; columns: Skill[][] };

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SkillsComponent implements OnInit {

  readonly groups: SkillGroup[] = [
    this.group('BACKEND', [
      { name: 'LARAVEL', level: 85 },
      { name: 'NODE.JS', level: 85 },
      { name: 'NEST.JS', level: 80 },
      { name: 'EXPRESS', level: 80 },
      { name: 'AWS S3 BUCKETS', level: 70 },
      { name: 'AWS LAMBDA', level: 70 },
      { name: 'DOCKER', level: 65 },
      { name: 'JAVA', level: 60 }
    ]),
    this.group('FRONTEND', [
      { name: 'ANGULAR 2+ / 17+', level: 95 },
      { name: 'REACT', level: 80 },
      { name: 'NEXT.JS', level: 75 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JAVASCRIPT', level: 90 },
      { name: 'TYPESCRIPT', level: 90 },
      { name: 'BOOTSTRAP', level: 90 },
      { name: 'REDUX (NGXS, NGRX)', level: 80 },
      { name: 'TAILWIND CSS', level: 85 },
      { name: 'STORYBOOK', level: 75 }
    ]),
    this.group('MOBILE', [
      { name: 'IONIC', level: 85 },
      { name: 'CAPACITOR', level: 80 },
      { name: 'CORDOVA', level: 80 },
      { name: 'FLUTTER', level: 70 },
      { name: 'REACT NATIVE', level: 70 },
      { name: 'EXPO', level: 70 },
      { name: 'ANDROID STUDIO', level: 65 },
      { name: 'XCODE', level: 65 }
    ]),
    this.group('DATABASES', [
      { name: 'POSTGRESQL', level: 85 },
      { name: 'MYSQL', level: 80 },
      { name: 'SQL SERVER', level: 75 },
      { name: 'MONGODB', level: 70 }
    ]),
    this.group('UI_UX', [
      { name: 'ADOBE XD', level: 90 },
      { name: 'FIGMA', level: 95 },
      { name: 'PENPOT', level: 80 },
      { name: 'BALSAMIQ', level: 85 }
    ]),
    this.group('AI_AGENTS', [
      { name: 'CURSOR', level: 90 },
      { name: 'OPENCODE', level: 85 },
      { name: 'CODEX', level: 85 },
      { name: 'KILO CODE', level: 80 },
      { name: 'CLINE', level: 80 },
      { name: 'CLAUDE CODE', level: 85 },
      { name: 'DEEPSEEK HARNESS', level: 80 }
    ]),
    this.group('SOFTWARE', [
      { name: 'POSTMAN', level: 95 },
      { name: 'INSOMNIA', level: 85 },
      { name: 'GITHUB', level: 90 },
      { name: 'GITLAB', level: 85 },
      { name: 'JIRA', level: 85 },
      { name: 'TRELLO', level: 85 },
      { name: 'LINEAR', level: 80 },
      { name: 'NOTION', level: 90 },
      { name: 'TEAMS', level: 85 },
      { name: 'IMAGEKIT', level: 75 },
      { name: 'RESEND', level: 75 }
    ]),
    this.group('MEDIA', [
      { name: 'ILLUSTRATOR', level: 85 },
      { name: 'PHOTOSHOP', level: 90 },
      { name: 'CAPCUT', level: 85 },
      { name: 'CAMTASIA STUDIO', level: 75 },
      { name: 'FL STUDIO', level: 80 },
      { name: 'CANVA', level: 85 },
      { name: 'PREMIERE', level: 75 },
      { name: 'PHOTOROOM', level: 75 }
    ]),
    this.group('DEVOPS', [
      { name: 'GOOGLE PLAY CONSOLE', level: 80 },
      { name: 'APP STORE CONNECT', level: 75 },
      { name: 'FIREBASE', level: 80 },
      { name: 'GOOGLE CLOUD', level: 75 },
      { name: 'AWS S3', level: 80 },
      { name: 'AWS SES', level: 75 },
      { name: 'AWS SQS', level: 75 },
      { name: 'RAILWAY', level: 80 },
      { name: 'CLOUDFLARE WORKERS', level: 80 },
      { name: 'VERCEL', level: 80 }
    ])
  ];

  constructor() { }

  ngOnInit() {
  }

  private group(key: string, skills: Skill[]): SkillGroup {
    const middle = Math.ceil(skills.length / 2);
    return { key, columns: [skills.slice(0, middle), skills.slice(middle)] };
  }

}
