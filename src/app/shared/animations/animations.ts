import {
  trigger,
  transition,
  style,
  animate,
  state,
  keyframes,
  query,
  stagger
} from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms ease-out', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ opacity: 0 }))
  ])
]);

export const slideInDownAnimation = trigger('slideInDown', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-50px)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const slideInUpAnimation = trigger('slideInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(50px)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const slideInLeftAnimation = trigger('slideInLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-50px)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

export const slideInRightAnimation = trigger('slideInRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(50px)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

export const zoomInAnimation = trigger('zoomIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.8)' }),
    animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
  ])
]);

export const expandCollapseAnimation = trigger('expandCollapse', [
  state('collapsed', style({
    height: '0',
    opacity: '0',
    overflow: 'hidden'
  })),
  state('expanded', style({
    height: '*',
    opacity: '1'
  })),
  transition('collapsed <=> expanded', [
    animate('300ms ease-in-out')
  ])
]);

export const rotateAnimation = trigger('rotate', [
  state('normal', style({ transform: 'rotate(0deg)' })),
  state('rotated', style({ transform: 'rotate(360deg)' })),
  transition('normal => rotated', [
    animate('600ms ease-in-out')
  ]),
  transition('rotated => normal', [
    animate('600ms ease-in-out')
  ])
]);

export const listStaggerAnimation = trigger('listStagger', [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(15px)' }),
      stagger('100ms', [
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

export const cardStaggerAnimation = trigger('cardStagger', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'scale(0.9)' }),
      stagger('80ms', [
        animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ], { optional: true })
  ])
]);

export const floatAnimation = trigger('float', [
  transition('* => *', [
    animate('3s ease-in-out infinite', keyframes([
      style({ transform: 'translateY(0px)', offset: 0 }),
      style({ transform: 'translateY(-20px)', offset: 0.5 }),
      style({ transform: 'translateY(0px)', offset: 1 })
    ]))
  ])
]);

export const pulseAnimation = trigger('pulse', [
  transition('* => *', [
    animate('2s ease-in-out infinite', keyframes([
      style({ boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.7)', offset: 0 }),
      style({ boxShadow: '0 0 0 10px rgba(16, 185, 129, 0)', offset: 0.7 }),
      style({ boxShadow: '0 0 0 0 rgba(16, 185, 129, 0)', offset: 1 })
    ]))
  ])
]);

export const shakeAnimation = trigger('shake', [
  transition('* => *', [
    animate('400ms ease-in-out', keyframes([
      style({ transform: 'translateX(0)', offset: 0 }),
      style({ transform: 'translateX(-10px)', offset: 0.25 }),
      style({ transform: 'translateX(10px)', offset: 0.5 }),
      style({ transform: 'translateX(-10px)', offset: 0.75 }),
      style({ transform: 'translateX(0)', offset: 1 })
    ]))
  ])
]);

export const bounceAnimation = trigger('bounce', [
  transition('* => *', [
    animate('600ms ease-in-out', keyframes([
      style({ transform: 'translateY(0)', offset: 0 }),
      style({ transform: 'translateY(-20px)', offset: 0.5 }),
      style({ transform: 'translateY(0)', offset: 1 })
    ]))
  ])
]);

export const formValidationAnimation = trigger('formValidation', [
  state('valid', style({ borderColor: '#10b981', boxShadow: '0 0 10px rgba(16, 185, 129, 0.2)' })),
  state('invalid', style({ borderColor: '#ef4444', boxShadow: '0 0 10px rgba(239, 68, 68, 0.2)' })),
  transition('* => *', [
    animate('300ms ease-out')
  ])
]);

export const errorShakeAnimation = trigger('errorShake', [
  transition('* => error', [
    animate('400ms ease-in-out', keyframes([
      style({ transform: 'translateX(0)', offset: 0 }),
      style({ transform: 'translateX(-5px)', offset: 0.25 }),
      style({ transform: 'translateX(5px)', offset: 0.5 }),
      style({ transform: 'translateX(-5px)', offset: 0.75 }),
      style({ transform: 'translateX(0)', offset: 1 })
    ]))
  ])
]);

export const notificationSlideInAnimation = trigger('notificationSlideIn', [
  transition(':enter', [
    style({ transform: 'translateX(400px)', opacity: 0 }),
    animate('400ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateX(400px)', opacity: 0 }))
  ])
]);

export const toastAnimation = trigger('toast', [
  transition(':enter', [
    style({ transform: 'translateY(100px)', opacity: 0 }),
    animate('400ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateY(100px)', opacity: 0 }))
  ])
]);

export const modalDialogAnimation = trigger('modalDialog', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.9)' }),
    animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ opacity: 0, transform: 'scale(0.9)' }))
  ])
]);

export const backdropAnimation = trigger('backdrop', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms ease-out', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ opacity: 0 }))
  ])
]);

export const pageEnterAnimation = trigger('pageEnter', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const pageExitAnimation = trigger('pageExit', [
  transition(':leave', [
    animate('400ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
  ])
]);

export const skeletonLoadAnimation = trigger('skeletonLoad', [
  transition('* => *', [
    animate('1.5s ease-in-out infinite', keyframes([
      style({ opacity: 0.6, offset: 0 }),
      style({ opacity: 1, offset: 0.5 }),
      style({ opacity: 0.6, offset: 1 })
    ]))
  ])
]);

export const spinnerAnimation = trigger('spinner', [
  transition('* => *', [
    animate('1s linear infinite', keyframes([
      style({ transform: 'rotate(0deg)', offset: 0 }),
      style({ transform: 'rotate(360deg)', offset: 1 })
    ]))
  ])
]);

export const tabsSwitchAnimation = trigger('tabsSwitch', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(50px)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(-50px)' }))
  ])
]);

export const accordionToggleAnimation = trigger('accordionToggle', [
  state('closed', style({
    height: '0',
    overflow: 'hidden',
    opacity: '0',
    padding: '0 16px'
  })),
  state('open', style({
    height: '*',
    overflow: 'visible',
    opacity: '1',
    padding: '16px'
  })),
  transition('closed <=> open', [
    animate('300ms ease-in-out')
  ])
]);

