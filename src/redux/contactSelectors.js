import { createSelector } from "@reduxjs/toolkit";

const getAllContact = (state) => state.items.contact;
const getFilterValue = (state) => state.items.filter;
const getNotificationValue = (state) => state.items.isNotification;
const isLoading = (state) => state.items.loading;
const getError = (state) => state.items.error;

const getFilterContact = createSelector(
  [getAllContact, getFilterValue],
  (contact, filter) => {
    return contact.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default {
  getAllContact,
  getFilterContact,
  getFilterValue,
  getNotificationValue,
  isLoading,
  getError,
};
