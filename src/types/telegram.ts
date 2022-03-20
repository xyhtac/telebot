import { PathLike, ReadStream } from "fs";

export type TelegramBotToken = string;

export type TelegramResponse<T = undefined> = {
    ok: boolean;
    result: T;
    error_code?: number;
    description?: string;
    parameters?: ResponseParameters;
};

export type TelegramErrorResponse =
    Pick<TelegramResponse, "ok" | "parameters"> &
    Required<Pick<TelegramResponse, "error_code" | "description">>;

export type Update = {
    update_id: number;
    message?: Message;
    edited_message?: Message;
    channel_post?: Message;
    edited_channel_post?: Message;
    inline_query?: InlineQuery;
    chosen_inline_result?: ChosenInlineResult;
    callback_query?: CallbackQuery;
    shipping_query?: ShippingQuery;
    pre_checkout_query?: PreCheckoutQuery;
    poll?: Poll;
    poll_answer?: PollAnswer;
    my_chat_member?: ChatMemberUpdated;
    chat_member?: ChatMemberUpdated;
    chat_join_request?: ChatJoinRequest;
};

export type WebhookInfo = {
    url: string;
    has_custom_certificate: boolean;
    pending_update_count: number;
    ip_address?: string;
    last_error_date?: boolean;
    last_error_message?: string;
    max_connections?: number;
    allowed_updates?: TelegramUpdateNames;
};

export type GameHighScore = {
    position: number;
    user: User;
    score: number;
};

export type TelegramUpdateNames = keyof Omit<Update, "update_id">;
export type TelegramMessageNames = keyof Omit<Message,
    "message_id" | "from" | "sender_chat" | "via_bot" | "date" | "chat" | "forward_from" | "forward_from_chat" |
    "forward_from_message_id" | "forward_signature" | "forward_sender_name" | "forward_date" | "reply_to_message" |
    "edit_date" | "media_group_id" | "author_signature" | "entities" | "caption_entities" | "reply_markup">; // TODO

export type ChatId = number | string;

export type MethodInputFile = PathLike | ReadStream;

export type PassportElementError =
    PassportElementErrorDataField |
    PassportElementErrorFrontSide |
    PassportElementErrorReverseSide |
    PassportElementErrorSelfie |
    PassportElementErrorFile |
    PassportElementErrorFiles |
    PassportElementErrorTranslationFile |
    PassportElementErrorTranslationFiles |
    PassportElementErrorUnspecified;

export type PassportElementErrorDataField = {
    source: "data";
    type: "personal_details" | "passport" | "driver_license" | "identity_card" | "internal_passport" | "address";
    field_name: string;
    data_hash: string;
    message: string;
};

export type PassportElementErrorFrontSide = {
    source: "front_side";
    type: "passport" | "driver_license" | "identity_card" | "internal_passport";
    file_hash: string;
    message: string;
};

export type PassportElementErrorReverseSide = {
    source: "reverse_side";
    type: "driver_license" | "identity_card";
    file_hash: string;
    message: string;
};

export type PassportElementErrorSelfie = {
    source: "selfie";
    type: "passport" | "driver_license" | "identity_card" | "internal_passport";
    file_hash: string;
    message: string;
};

export type PassportElementErrorFile = {
    source: "file";
    type: "utility_bill" | "bank_statement" | "rental_agreement" | "passport_registration" | "temporary_registration";
    file_hash: string;
    message: string;
};


export type PassportElementErrorFiles = {
    source: "files";
    type: "utility_bill" | "bank_statement" | "rental_agreement" | "passport_registration" | "temporary_registration";
    file_hashes: string[];
    message: string;
};

export type PassportElementErrorTranslationFile = {
    source: "translation_file";
    type: "passport" | "driver_license" | "identity_card" |
        "internal_passport" | "utility_bill" | "bank_statement" | "rental_agreement" |
        "passport_registration" | "temporary_registration";
    file_hash: string;
    message: string;
};

export type PassportElementErrorTranslationFiles = {
    source: "translation_files";
    type: "passport" | "driver_license" | "identity_card" |
        "internal_passport" | "utility_bill" | "bank_statement" | "rental_agreement" |
        "passport_registration" | "temporary_registration";
    file_hashes: string[];
    message: string;
};

export type PassportElementErrorUnspecified = {
    source: "unspecified";
    type: string;
    element_hash: string;
    message: string;
};

export type InputMessageContent =
    InputTextMessageContent |
    InputLocationMessageContent |
    InputVenueMessageContent |
    InputContactMessageContent;

export type InputTextMessageContent = {
    message_text: string;
    parse_mode?: ParseMode;
    disable_web_page_preview?: boolean;
};

export type InputLocationMessageContent = Location;

export type InputVenueMessageContent = {
    latitude: number;
    longitude: number;
} & Omit<Venue, "location">;

export type InputContactMessageContent = Omit<Contact, "user_id">;

export type InputInvoiceMessageContent = {
    title: string;
    description: string;
    payload: string;
    provider_token: string;
    currency: string;
    prices: LabeledPrice[];
    max_tip_amount?: number;
    suggested_tip_amounts?: number[];
    provider_data?: string;
    photo_url?: string;
    photo_size?: number;
    photo_width?: number;
    photo_height?: number;
    need_name?: boolean;
    need_phone_number?: boolean;
    need_email?: boolean;
    need_shipping_address?: boolean;
    send_phone_number_to_provider?: boolean;
    send_email_to_provider?: boolean;
    is_flexible?: boolean;
};

export type InlineQuery = {
    id: string;
    from: User;
    query: string;
    offset: string;
    chat_type?: ChatType;
    location?: Location;
};

export type InlineQueryResult =
    InlineQueryResultCachedAudio |
    InlineQueryResultCachedDocument |
    InlineQueryResultCachedGif |
    InlineQueryResultCachedMpeg4Gif |
    InlineQueryResultCachedPhoto |
    InlineQueryResultCachedSticker |
    InlineQueryResultCachedVideo |
    InlineQueryResultCachedVoice |
    InlineQueryResultArticle |
    InlineQueryResultAudio |
    InlineQueryResultContact |
    InlineQueryResultGame |
    InlineQueryResultDocument |
    InlineQueryResultGif |
    InlineQueryResultLocation |
    InlineQueryResultMpeg4Gif |
    InlineQueryResultPhoto |
    InlineQueryResultVenue |
    InlineQueryResultVideo |
    InlineQueryResultVoice;


export type InlineQueryResultArticle = {
    type: "article";
    id: string;
    title: string;
    input_message_content: InputMessageContent;
    reply_markup?: InlineKeyboardMarkup;
    url?: string;
    hide_url?: boolean;
    description?: string;
    thumb_url?: string;
    thumb_width?: number;
    thumb_height?: number;
};

export type InlineQueryResultPhoto = {
    type: "photo";
    id: string;
    photo_url: string;
    thumb_url: string;
    photo_width?: number;
    photo_height?: number;
    title?: string;
    description?: string;
    caption?: string;
    parse_mode?: ParseMode;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};

export type InlineQueryResultGif = {
    type: "gif";
    id: string;
    gif_url: string;
    gif_width: number;
    gif_height: number;
    gif_duration: number;
    thumb_url: string;
    thumb_mime_type?: "image/jpeg" | "image/gif" | "video/mp4";
    title?: string;
    caption?: string;
    parse_mode?: ParseMode;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};

export type InlineQueryResultMpeg4Gif = {
    type: "mpeg4_gif";
    id: string;
    mpeg4_url: string;
    mpeg4_width: number;
    mpeg4_height: number;
    mpeg4_duration: number;
    thumb_url: string;
    thumb_mime_type?: "image/jpeg" | "image/gif" | "video/mp4";
    title?: string;
    caption?: string;
    parse_mode?: ParseMode;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};

export type InlineQueryResultVideo = {
    type: "video";
    id: string;
    video_url: string;
    mime_type: "text/html" | "video/mp4";
    thumb_url: string;
    title: string;
    caption?: string;
    video_width?: number;
    video_height?: number;
    video_duration?: number;
    description?: number;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};

export type InlineQueryResultAudio = {
    type: "audio";
    id: string;
    audio_url: string;
    title: string;
    caption?: string;
    performer?: string;
    audio_duration?: number;
    parse_mode?: ParseMode;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};

export type InlineQueryResultVoice = {
    type: "voice";
    id: string;
    voice_url: string;
    title: string;
    caption?: string;
    voice_duration?: number;
    parse_mode?: ParseMode;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};

export type InlineQueryResultDocument = {
    type: "document";
    id: string;
    title: string;
    document_url: string;
    mime_type: "application/pdf" | "application/zip";
    description?: string;
    caption?: string;
    thumb_url?: string;
    thumb_width?: number;
    thumb_height?: number;
    parse_mode?: ParseMode;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};

export type InlineQueryResultLocation = {
    type: "location";
    id: string;
    title: string;
    latitude: number;
    longitude: number;
    heading?: number;
    horizontal_accuracy?: number;
    proximity_alert_radius?: number;
    live_period?: number;
    thumb_url?: string;
    thumb_width?: number;
    thumb_height?: number;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};

export type InlineQueryResultVenue = {
    type: "venue";
    id: string;
    latitude: number;
    longitude: number;
    title: string;
    address: string;
    foursquare_id?: string;
    foursquare_type?: string;
    thumb_url?: string;
    thumb_width?: number;
    thumb_height?: number;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    google_place_id?: string;
    google_place_type?: string;
};

export type InlineQueryResultContact = {
    type: "contact";
    id: string;
    phone_number: string;
    first_name: string;
    last_name?: string;
    vcard?: string;
    thumb_url?: string;
    thumb_width?: number;
    thumb_height?: number;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};

export type InlineQueryResultGame = {
    type: "game";
    id: string;
    game_short_name: string;
    reply_markup?: InlineKeyboardMarkup;
};

export type InlineQueryResultCachedPhoto = {
    type: "photo";
    id: string;
    photo_file_id: string;
    title?: string;
    description?: string;
    caption?: string;
    parse_mode?: ParseMode;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};

export type InlineQueryResultCachedGif = {
    type: "gif";
    id: string;
    gif_file_id: string;
    title?: string;
    caption?: string;
    parse_mode?: ParseMode;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};

export type InlineQueryResultCachedMpeg4Gif = {
    type: "mpeg4_gif";
    id: string;
    mpeg4_file_id: string;
    title?: string;
    caption?: string;
    parse_mode?: ParseMode;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};

export type InlineQueryResultCachedSticker = {
    type: "sticker";
    id: string;
    sticker_file_id: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};

export type InlineQueryResultCachedDocument = {
    type: "document";
    id: string;
    document_file_id: string;
    title: string;
    description?: string;
    caption?: string;
    parse_mode?: ParseMode;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};

export type InlineQueryResultCachedVideo = {
    type: "video";
    id: string;
    video_file_id: string;
    title: string;
    description?: string;
    caption?: string;
    parse_mode?: ParseMode;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};

export type InlineQueryResultCachedVoice = {
    type: "voice";
    id: string;
    voice_file_id: string;
    title: string;
    caption?: string;
    parse_mode?: ParseMode;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};

export type InlineQueryResultCachedAudio = {
    type: "audio";
    id: string;
    audio_file_id: string;
    caption?: string;
    parse_mode?: ParseMode;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};

export type ChosenInlineResult = {
    result_id: string;
    from: User;
    location?: Location;
    inline_message_id?: string;
    query: string;
};

export type User = {
    id: number;
    is_bot: boolean;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    can_join_groups?: boolean;
    can_read_all_group_messages?: boolean;
    supports_inline_queries?: boolean;
};

export type MessageEntity = {
    type: "mention" | "hashtag" | "cashtag" | "bot_command" | "url" | "email" | "phone_number" | "bold" | "italic" |
        "underline" | "strikethrough" | "code" | "pre" | "text_link" | "text_mention";
    offset: number;
    length: number;
    url?: string;
    user?: User;
    language?: string;
};

export type WebhookResponse = true;

export type Message = {
    message_id: number;
    from?: User;
    sender_chat?: Chat;
    via_bot?: User;
    date: number;
    chat: Chat;
    forward_from?: User;
    forward_from_chat?: Chat;
    forward_from_message_id?: number;
    forward_signature?: string;
    forward_sender_name?: string;
    forward_date?: number;
    reply_to_message?: Message;
    edit_date?: number;
    media_group_id?: string;
    author_signature?: string;
    text?: string;
    entities?: MessageEntity[];
    caption_entities?: MessageEntity[];
    audio?: Audio;
    document?: Document;
    animation?: Animation;
    game?: Game;
    photo?: PhotoSize[];
    sticker?: Sticker;
    video?: Video;
    voice?: Voice;
    video_note?: VideoNote;
    caption?: string;
    contact?: Contact;
    location?: Location;
    venue?: Venue;
    poll?: Poll;
    dice?: Dice;
    new_chat_members?: User[];
    left_chat_member?: User;
    new_chat_title?: string;
    new_chat_photo?: PhotoSize[];
    delete_chat_photo?: boolean;
    group_chat_created?: boolean;
    supergroup_chat_created?: boolean;
    channel_chat_created?: boolean;
    message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged;
    migrate_to_chat_id?: number;
    migrate_from_chat_id?: number;
    pinned_message?: Message;
    invoice?: Invoice;
    successful_payment?: SuccessfulPayment;
    connected_website?: string;
    passport_data?: PassportData;
    proximity_alert_triggered?: ProximityAlertTriggered;
    voice_chat_scheduled?: VoiceChatScheduled;
    voice_chat_started?: VoiceChatStarted;
    voice_chat_ended?: VoiceChatEnded;
    voice_chat_participants_invited?: VoiceChatParticipantsInvited;
    reply_markup?: InlineKeyboardMarkup;
};

export type PassportData = {
    data: EncryptedPassportElement[];
    credentials: EncryptedCredentials[];
};

export type PassportFile = FileIdentifier & {
    file_size: number;
    file_date: number;
};

export type EncryptedPassportElement = {
    type: "personal_details" | "passport" | "driver_license" | "identity_card" | "internal_passport" | "address" |
        "utility_bill" | "bank_statement" | "rental_agreement" | "passport_registration" | "temporary_registration" |
        "phone_number" | "email";
    data?: string;
    phone_number?: string;
    email?: string;
    files?: PassportFile[];
    front_side?: PassportFile[];
    reverse_side?: PassportFile[];
    selfie?: PassportFile[];
    translation?: PassportFile[];
    hash: string;
};

export type EncryptedCredentials = {
    data: string;
    hash: string;
    secret: string;
};

export type Invoice = {
    title: string;
    description: string;
    start_parameter: string;
    currency: string;
    total_amount: number;
};

export type ShippingAddress = {
    country_code: string;
    state: string;
    city: string;
    street_line1: string;
    street_line2: string;
    post_code: string;
};

export type OrderInfo = {
    name?: string;
    phone_number?: string;
    email?: string;
    shipping_address?: ShippingAddress;
};

export type ShippingOption = {
    id: string;
    title: string;
    prices: LabeledPrice[];
};

export type LabeledPrice = {
    label: string;
    amount: number;
};

export type SuccessfulPayment = {
    currency: string;
    total_amount: number;
    invoice_payload: string;
    shipping_option_id?: string;
    order_info?: OrderInfo;
    telegram_payment_charge_id: string;
    provider_payment_charge_id: string;
};

export type ShippingQuery = {
    id: string;
    user: User;
    invoice_payload: string;
    shipping_address: ShippingAddress;
};

export type PreCheckoutQuery = {
    id: string;
    from: User;
    currency: string;
    total_amount: number;
    invoice_payload: string;
    shipping_option_id?: string;
    order_info?: OrderInfo;
};

type FileIdentifier = {
    file_id: string;
    file_unique_id: string;
};

export type PhotoSize = FileIdentifier & {
    width: number;
    height: number;
    file_size?: number;
};

export type Document = FileIdentifier & {
    thumb?: PhotoSize;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
};

export type Audio = Document & {
    duration: number;
    performer?: string;
    title?: string;
};

export type Video = Document & {
    width: number;
    height: number;
    duration: number;
};

export type Animation = Document & {
    width: number;
    height: number;
    duration: number;
};

export type Voice = FileIdentifier & Pick<Document, "mime_type" | "file_size"> & {
    duration: number;
};

export type DiceEmoji = "🎲" | "🎯" | "🎳" | "🏀" | "⚽" | "🎰";

export type Dice = {
    emoji: string;
    value: number;
};

export type Contact = {
    phone_number: string;
    first_name: string;
    last_name?: string;
    user_id?: number;
    vcard?: string;
};

export type Location = {
    longitude: number;
    latitude: number;
    horizontal_accuracy?: number;
    live_period?: number;
    heading?: number;
    proximity_alert_radius?: number;
};

export type Venue = {
    location: Location;
    title: string;
    address: string;
    foursquare_id?: string;
    foursquare_type?: string;
    google_place_id?: string;
    google_place_type?: string;
};

export type ProximityAlertTriggered = {
    traveler: User;
    watcher: User;
    distance: User;
};

export type MessageAutoDeleteTimerChanged = {
    message_auto_delete_time: number;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type VoiceChatStarted = {};

export type VoiceChatEnded = {
    duration: number;
};

export type VoiceChatParticipantsInvited = {
    users?: User[]
};

export type VoiceChatScheduled = {
    start_date: number;
};

export type Game = {
    title: string;
    description: string;
    photo: PhotoSize[];
    text: string;
    text_entities?: MessageEntity[];
    animation?: Animation;
};

export type Sticker = FileIdentifier & {
    width: string;
    height: string;
    is_animated: boolean;
    thumb?: PhotoSize;
    emoji?: string;
    set_name?: string;
    mask_position?: MaskPosition;
    file_size?: number;
};

export type StickerSet = {
    name: string;
    title: string;
    is_animated: boolean;
    contains_masks: boolean;
    stickers: Sticker[];
};

export type MaskPosition = {
    point: string;
    x_shift: number;
    y_shift: number;
    scale: number;
};

export type VideoNote = FileIdentifier & {
    length: number;
    duration: number;
    thumb?: PhotoSize[];
    file_size?: number;
};

export type PollOption = {
    text: string;
    voter_count: number;
};

export type PollAnswer = {
    poll_id: string;
    user: User;
    option_ids: number[] | "";
};

export type PollType = "regular" | "quiz";

export type Poll = {
    id: string;
    question: User;
    options: PollOption[];
    total_voter_count: number;
    is_closed: boolean;
    is_anonymous: boolean;
    type: PollType;
    allows_multiple_answers: boolean;
    correct_option_id?: number;
};

export type UserProfilePhotos = {
    total_count: number;
    photos: Array<PhotoSize[]>;
};

export type File = FileIdentifier & {
    file_size?: number;
    file_path?: string;
};

export type BotCommand = {
    command: string;
    description: string;
};

export type ReplyKeyboardMarkup = {
    keyboard: Array<KeyboardButton[]>;
    resize_keyboard?: boolean;
    one_time_keyboard?: boolean;
    input_field_placeholder?: string;
    selective?: boolean;
};

export type KeyboardButton = {
    text: string;
    request_contact?: boolean;
    request_location?: boolean;
    request_poll?: KeyboardButtonPollType;
};

export type KeyboardButtonPollType = {
    type?: PollType;
};

export type ReplyKeyboardRemove = {
    remove_keyboard: boolean;
    selective?: boolean;
};

export type InlineKeyboardMarkup = {
    inline_keyboard: Array<InlineKeyboardButton[]>;
};

type CallbackGame = "";

export type InlineKeyboardButton = {
    text: string;
    url?: string;
    login_url?: LoginUrl;
    callback_data?: string;
    switch_inline_query?: string;
    switch_inline_query_current_chat?: string;
    callback_game?: CallbackGame;
    pay?: boolean;
};

export type LoginUrl = {
    url: string;
    forward_text?: string;
    bot_username?: string;
    request_write_access?: boolean;
};

export type CallbackQuery = {
    id: string;
    from: User;
    message?: Message;
    inline_message_id?: string;
    chat_instance: string;
    data?: string;
    game_short_name?: string;
};

export type ForceReply = {
    force_reply: true;
    input_field_placeholder?: string;
    selective?: boolean;
};

export type ChatAction = "typing" | "upload_photo" | "record_video" | "upload_video" | "record_voice" | "upload_voice" |
    "upload_document" | "choose_sticker" | "find_location" | "record_video_note" | "upload_video_note";

export type ChatType = "private" | "group" | "supergroup" | "channel";

export type Chat = {
    id: number;
    type: ChatType;
    title?: string;
    username?: string;
    first_name?: string;
    last_name?: string;
    photo?: ChatPhoto;
    bio?: string;
    description?: string;
    invite_link?: string;
    pinned_message?: Message;
    permissions?: ChatPermissions;
    slow_mode_delay?: number;
    sticker_set_name?: string;
    can_set_sticker_set?: boolean;
    linked_chat_id?: string;
    location?: ChatLocation;
};

export type ChatPhoto = {
    small_file_id: string;
    small_file_unique_id: string;
    big_file_id: string;
    big_file_unique_id: string;
};

export type ChatMember = ChatMemberOwner | ChatMemberAdministrator | ChatMemberMember | ChatMemberRestricted |
    ChatMemberLeft | ChatMemberBanned;

export type ChatMemberOwner = {
    status: "creator";
    user: User;
    is_anonymous: boolean;
    custom_title?: string;
};

export type ChatMemberAdministrator = {
    status: "administrator";
    user: User;
    can_be_edited: boolean;
    is_anonymous: boolean;
    can_manage_chat: boolean;
    can_delete_messages: boolean;
    can_manage_voice_chats: boolean;
    can_restrict_members: boolean;
    can_promote_members: boolean;
    can_change_info: boolean;
    can_invite_users: boolean;
    can_post_messages?: boolean;
    can_edit_messages?: boolean;
    can_pin_messages?: boolean;
    custom_title?: string;
};

export type ChatMemberMember = {
    status: "member";
    user: User;
};

export type ChatMemberRestricted = {
    status: "restricted";
    user: User;
    is_member: boolean;
    can_change_info: boolean;
    can_invite_users: boolean;
    can_pin_messages: boolean;
    can_send_messages: boolean;
    can_send_media_messages: boolean;
    can_send_polls: boolean;
    can_send_other_messages: boolean;
    can_add_web_page_previews: boolean;
    until_date: number;
};

export type ChatMemberLeft = {
    status: "left";
    user: User;
};

export type ChatMemberBanned = {
    status: "kicked";
    user: User;
    until_date: number;
};

export type ChatInviteLink = {
    invite_link: string;
    creator: User;
    is_primary: boolean;
    is_revoked: boolean;
    name?: string;
    expire_date?: number;
    member_limit?: number;
    pending_join_request_count?: number;
};

export type ChatJoinRequest = {
    chat: Chat;
    from: User;
    date: number;
    bio?: string;
    invite_link?: ChatInviteLink;
};

export type ChatMemberUpdated = {
    chat: Chat;
    from: User;
    date: string;
    old_chat_member: ChatMember;
    new_chat_member: ChatMember;
    invite_link?: ChatInviteLink;
};

export type ChatPermissions = {
    can_send_messages?: boolean;
    can_send_media_messages?: boolean;
    can_send_polls?: boolean;
    can_send_other_messages?: boolean;
    can_add_web_page_previews?: boolean;
    can_change_info?: boolean;
    can_invite_users?: boolean;
    can_pin_messages?: boolean;
};

export type ChatLocation = {
    location: Location;
    address: string;
};

export type ResponseParameters = {
    migrate_to_chat_id?: number;
    retry_after?: number;
};

type InputMediaObject = {
    media: MethodInputFile;
    thumb?: MethodInputFile;
    caption?: string;
    parse_mode?: ParseMode;
};

export type ParseMode = "markdown" | "html";

export type InputMedia = InputMediaAnimation | InputMediaDocument | InputMediaAudio | InputMediaPhoto | InputMediaVideo;

export type InputMediaPhoto = Omit<InputMediaObject, "thumb"> & {
    type: "photo";
};

export type InputMediaVideo = InputMediaObject & {
    type: "video";
    width?: number;
    height?: number;
    duration?: number;
    supports_streaming?: boolean;
};

export type InputMediaAnimation = InputMediaObject & {
    type: "animation";
    width?: number;
    height?: number;
    duration?: number;
};

export type InputMediaAudio = InputMediaObject & {
    type: "audio";
    duration?: number;
    performer?: string;
    title?: string;
};

export type InputMediaDocument = InputMediaObject & {
    type: "document";
    disable_content_type_detection?: boolean;
};

export type ReplyMarkup = InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;

export type TelegramMessageOptional = {
    parse_mode?: ParseMode;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    reply_markup?: ReplyMarkup;
    allow_sending_without_reply?: boolean;
};

export type BotCommandScopeDefault = {
    type: "default";
};

export type BotCommandScopeAllPrivateChats = {
    type: "all_private_chats";
};

export type BotCommandScopeAllGroupChats = {
    type: "all_group_chats";
};

export type BotCommandScopeAllChatAdministrators = {
    type: "all_chat_administrators";
};

export type BotCommandScopeChat = {
    type: "chat";
    chat_id?: string | number;
};

export type BotCommandScopeChatAdministrators = {
    type: "chat_administrators";
    chat_id?: string | number;
};

export type BotCommandScopeChatMember = {
    type: "chat_member";
    chat_id?: string | number;
};

export type BotCommandScope = BotCommandScopeDefault | BotCommandScopeAllPrivateChats | BotCommandScopeAllGroupChats |
    BotCommandScopeAllChatAdministrators | BotCommandScopeChat | BotCommandScopeChatAdministrators |
    BotCommandScopeChatMember;