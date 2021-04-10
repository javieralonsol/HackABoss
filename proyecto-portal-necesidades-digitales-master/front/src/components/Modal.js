import React from 'react';
import { applyBackgroundBlur } from '../helpers/helpers.js';
import { Login } from './Login.js';

const modalFocusTrap = (event) => {
  if (event.key !== 'Tab') return;
  event.preventDefault();
  const current = event.target.tabIndex;

  if (!event.shiftKey) {
    const nexTabIndex = document.querySelector(`.modal [tabIndex="${current + 1}"]`);
    if (nexTabIndex) {
      nexTabIndex.focus();
    } else {
      document.querySelector('.modal [tabIndex="1"]').focus();
    }
  } else {
    const prevTabIndex = document.querySelector(`.modal [tabIndex="${current - 1}"]`);
    if (prevTabIndex) {
      prevTabIndex.focus();
    } else {
      const maxTabIndex = Math.max(
        ...[...document.querySelectorAll('.modal [tabindex]')].map((element) => element.tabIndex)
      );
      document.querySelector(`.modal [tabIndex="${maxTabIndex}"]`).focus();
    }
  }
};

export const Modal = ({ modalContent, setModalContent, setLoadingOn }) => {
  applyBackgroundBlur(modalContent);

  if (modalContent) {
    document.addEventListener('keydown', modalFocusTrap);
  } else {
    document.removeEventListener('keydown', modalFocusTrap);
  }

  return (
    <aside className={`modal${modalContent && ' modal-visible-on'}`}>
      <div className="modal-contenido">
        <label htmlFor="modalCloseButton">Close button</label>
        <button
          className="button modal-contenido-close"
          id="modalCloseButton"
          onClick={() => setModalContent('')}
          tabIndex="1"
        >
          Close button
        </button>
        <div>
          {modalContent === 'login' || modalContent === 'register' ? (
            <Login loginOrRegister={modalContent} setLoadingOn={setLoadingOn} setModalContent={setModalContent} />
          ) : (
            <div className="max-width" dangerouslySetInnerHTML={{ __html: modalContent }}></div>
          )}
          {modalContent?.includes('<template>') && (
            <button className="ok-close-button" onClick={() => setModalContent('')} autoFocus>
              {modalContent.replace(/^.*<template>([^<]*)<\/template>/, '$1')}
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};
