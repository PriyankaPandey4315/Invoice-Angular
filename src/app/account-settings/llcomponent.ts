// // <div class="sidenav-container">
// //   <mat-sidenav-container>
// //     <!-- Sidebar -->
// //     <mat-sidenav
// //       mode="side"
// //       [opened]="true"
// //       [style.width]="isSidebarExpanded ? '240px' : '60px'">
      
// //       <!-- Profile Section -->
// //       <div class="sidebar-profile">
// //         <img src="assets/images/user6.png" class="profile-img" alt="User">
// //         <div *ngIf="isSidebarExpanded" class="profile-info">
// //           <h5 class="profile-name">Nick Gonzalez</h5>
// //           <p class="profile-role">Dept Admin</p>
// //         </div>
// //       </div>

// //       <!-- Menu Items -->
// //       <mat-nav-list>
// //         <ng-container *ngFor="let item of menuItems">

// //           <!-- Parent Menu -->
// //           <a mat-list-item
// //              (click)="onMenuItemClick(item)"
// //              [routerLink]="item.children.length ? null : item.path"
// //              routerLinkActive="active"
// //              [ngClass]="{'active': item.isOpen}">
             
// //             <i [class]="item.icon"></i>
// //             <span *ngIf="isSidebarExpanded">{{ item.label }}</span>
            
// //             <!-- Dropdown Icon -->
// //             <mat-icon
// //               *ngIf="item.children?.length"
// //               (click)="toggleDropdown(item, $event)"
// //               class="dropdown-icon">
// //               {{ item.isOpen ? 'expand_less' : 'chevron_right' }}
// //             </mat-icon>
// //           </a>

// //           <!-- Submenu -->
// //           <div *ngIf="item.isOpen && isSidebarExpanded" class="dropdown-content">
// //             <ng-container *ngFor="let child of item.children">
// //               <a mat-list-item
// //                  [routerLink]="child.path"
// //                  routerLinkActive="active"
// //                  class="child-item">
// //                 <i [class]="child.icon"></i>
// //                 {{ child.label }}
// //               </a>
// //             </ng-container>
// //           </div>

// //         </ng-container>
// //       </mat-nav-list>
// //     </mat-sidenav>

// //     <!-- Main Content -->
// //     <div class="content">
// //       <router-outlet></router-outlet>
// //     </div>
// //   </mat-sidenav-container>
// // </div>

// // <!-- Pin Button -->
// // <button class="pin-btn" (click)="toggleDrawer()">
// //   <mat-icon>{{ isSidebarExpanded ? 'chevron_left' : 'chevron_right' }}</mat-icon>
// // </button>




// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   isSidebarExpanded = true;

//   toggleDrawer() {
//     this.isSidebarExpanded = !this.isSidebarExpanded;
//   }

//   onMenuItemClick(item: any) {
//     if (item.children?.length) {
//       item.isOpen = !item.isOpen;
//     }
//   }

//   toggleDropdown(item: any, event: Event) {
//     event.stopPropagation();
//     item.isOpen = !item.isOpen;
//   }

//   menuItems = [
//     {
//       label: 'Dashboard',
//       icon: 'ri-dashboard-line',
//       path: '/dashboard',
//       children: []
//     },
//     {
//       label: 'Settings',
//       icon: 'ri-settings-line',
//       path: '',
//       children: [
//         { label: 'Profile', icon: 'ri-user-line', path: '/profile' },
//         { label: 'Security', icon: 'ri-lock-line', path: '/security' }
//       ]
//     },
//     {
//       label: 'Messages',
//       icon: 'ri-mail-line',
//       path: '/messages',
//       children: []
//     }
//   ];
// }

