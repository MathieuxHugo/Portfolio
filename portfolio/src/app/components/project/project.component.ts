import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../types/project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projectName: string | null = "";
  project : Project =  {
    title: "Project",
    description: "Project",
    technologies: ["Java"],
    imageUrl: "Project",
    link: "Project"
}

  constructor(private route: ActivatedRoute, private projectService : ProjectService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.projectName = params.get('projectName');
      this.project=this.projectService.getProjectByName(this.projectName!)!
    });
  }
}
