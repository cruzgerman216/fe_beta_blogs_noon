import { Component, Input } from '@angular/core';
import { Blog } from '../../../models/blog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent {
  @Input({ required: true }) blogs: Blog[] = [];
}
