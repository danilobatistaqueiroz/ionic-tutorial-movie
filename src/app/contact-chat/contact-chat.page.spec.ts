import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactChatPage } from './contact-chat.page';

describe('ContactChatPage', () => {
  let component: ContactChatPage;
  let fixture: ComponentFixture<ContactChatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContactChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
