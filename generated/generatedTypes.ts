/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type AuthInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  error?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String']['output'];
  user: User;
};

export type Message = {
  __typename?: 'Message';
  dateSent: Scalars['Date']['output'];
  id: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
  recipientId: Scalars['String']['output'];
  senderId: Scalars['String']['output'];
};

export type MessageInput = {
  message?: InputMaybe<Scalars['String']['input']>;
  recipientId: Scalars['String']['input'];
  senderId: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginResponse;
  logout?: Maybe<Scalars['Boolean']['output']>;
  register: AuthResponse;
  sendMessage: SendResponse;
};


export type MutationLoginArgs = {
  loginInput: AuthInput;
};


export type MutationRegisterArgs = {
  registerInput: AuthInput;
};


export type MutationSendMessageArgs = {
  message: MessageInput;
};

export type Query = {
  __typename?: 'Query';
  getAllUsers?: Maybe<Array<Maybe<User>>>;
  getMessagesFromUser: Array<Maybe<Message>>;
  getUserByUserName?: Maybe<User>;
};


export type QueryGetMessagesFromUserArgs = {
  userName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUserByUserNameArgs = {
  userName: Scalars['String']['input'];
};

export type SendResponse = {
  __typename?: 'SendResponse';
  error?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  messageSent?: Maybe<Message>;
};


export type SubscriptionMessageSentArgs = {
  recipientId: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String']['output'];
  username: Scalars['String']['output'];
};
