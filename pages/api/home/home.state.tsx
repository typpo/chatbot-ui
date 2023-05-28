import { Conversation, Message, Role } from '@/types/chat';
import { ErrorMessage } from '@/types/error';
import { FolderInterface } from '@/types/folder';
import { OpenAIModel, OpenAIModelID } from '@/types/openai';
import { PluginKey } from '@/types/plugin';
import { Prompt } from '@/types/prompt';

const initialConvo = {"id":"5a3fb242-e1b2-4240-995f-9387b62cb61a","name":"Hello","messages":[{"role":'user' as Role,"content":"Hello"},{"role":"assistant" as Role,"content":"Hello! How can I help you today?"}],"model":{"id":"gpt-4","name":"GPT-4","maxLength":24000,"tokenLimit":8000},"prompt":"You are ZillyGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.","temperature":0.7,"folderId":null}

export interface HomeInitialState {
  apiKey: string;
  pluginKeys: PluginKey[];
  loading: boolean;
  lightMode: 'light' | 'dark';
  messageIsStreaming: boolean;
  modelError: ErrorMessage | null;
  models: OpenAIModel[];
  folders: FolderInterface[];
  conversations: Conversation[];
  selectedConversation: Conversation | undefined;
  currentMessage: Message | undefined;
  prompts: Prompt[];
  temperature: number;
  showChatbar: boolean;
  showPromptbar: boolean;
  currentFolder: FolderInterface | undefined;
  messageError: boolean;
  searchTerm: string;
  defaultModelId: OpenAIModelID | undefined;
  serverSideApiKeyIsSet: boolean;
  serverSidePluginKeysSet: boolean;
}

export const initialState: HomeInitialState = {
  apiKey: '',
  loading: false,
  pluginKeys: [],
  lightMode: 'light',
  messageIsStreaming: false,
  modelError: null,
  models: [],
  folders: [],
  conversations: [initialConvo],
  selectedConversation: initialConvo,
  currentMessage: undefined,
  prompts: [],
  temperature: 0.7,
  showPromptbar: false,
  showChatbar: true,
  currentFolder: undefined,
  messageError: false,
  searchTerm: '',
  defaultModelId: undefined,
  serverSideApiKeyIsSet: false,
  serverSidePluginKeysSet: false,
};
