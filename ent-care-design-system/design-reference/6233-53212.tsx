const assetPathPrefix = "https://www.figma.com/api/mcp/asset/d97fff79-3c82-4f37-94f7-f2486a66f2ae";
const imgProperty132Px = `${assetPathPrefix}/75dac.png`;
const imgProperty124Px = `${assetPathPrefix}/dd03b.png`;
const imgCategory2 = `${assetPathPrefix}/165b9.svg`;
const imgNotification = `${assetPathPrefix}/a31fd.svg`;
const imgTaskSquare = `${assetPathPrefix}/85b6d.svg`;
const imgVuesaxLinearMessageQuestion = `${assetPathPrefix}/7a272.svg`;
const imgSetting = `${assetPathPrefix}/ca8b3.svg`;
const imgGroup1 = `${assetPathPrefix}/72053.svg`;
const imgUserOctagon = `${assetPathPrefix}/deb54.svg`;
const imgArrowDown = `${assetPathPrefix}/71b71.svg`;
const imgSidebarLeft = `${assetPathPrefix}/9f2cf.svg`;
const imgMessageText = `${assetPathPrefix}/925fe.svg`;
const imgNote = `${assetPathPrefix}/c78a9.svg`;
const imgAdd = `${assetPathPrefix}/509d0.svg`;
const imgFolder2 = `${assetPathPrefix}/c4cc5.svg`;
const imgSearchNormal = `${assetPathPrefix}/939e0.svg`;
const imgPlus = `${assetPathPrefix}/3dab3.svg`;
const imgVuesaxBoldStickynote = `${assetPathPrefix}/9626b.svg`;
const imgVuesaxLinearMore = `${assetPathPrefix}/75c72.svg`;
const imgLine = `${assetPathPrefix}/0b1b1.svg`;
const imgStickynote = `${assetPathPrefix}/6f37d.svg`;
const imgMore = `${assetPathPrefix}/95bac.svg`;
const imgEdit2 = `${assetPathPrefix}/ff36d.svg`;
const imgSend2 = `${assetPathPrefix}/2c0a8.svg`;
const imgLine1 = `${assetPathPrefix}/2d0e8.svg`;
const imgTrash = `${assetPathPrefix}/c78c0.svg`;

type AvatarMan1Props = {
  className?: string;
  property1?: "24px" | "32px";
};

function AvatarMan1({ className, property1 = "32px" }: AvatarMan1Props) {
  const is24Px = property1 === "24px";
  return (
    <div className={className || `relative ${is24Px ? "size-[24px]" : "size-[32px]"}`} id={is24Px ? "node-3_1844" : "node-3_1842"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" height={is24Px ? "24" : "32"} src={is24Px ? imgProperty124Px : imgProperty132Px} width={is24Px ? "24" : "32"} />
    </div>
  );
}

type NavMenuProps = {
  className?: string;
  active?: boolean;
  darkmode?: "On";
  menu?: "Dashboard" | "Help & Center" | "Settings" | "Notifications" | "Tasks";
};

function NavMenu({ className, active = false, darkmode = "On", menu = "Dashboard" }: NavMenuProps) {
  const isDashboardAndFalseAndOn = menu === "Dashboard" && !active && darkmode === "On";
  const isHelpCenterAndFalseAndOn = menu === "Help & Center" && !active && darkmode === "On";
  const isNotificationsAndFalseAndOn = menu === "Notifications" && !active && darkmode === "On";
  const isSettingsAndFalseAndOn = menu === "Settings" && !active && darkmode === "On";
  const isTasksAndFalseAndOn = menu === "Tasks" && !active && darkmode === "On";
  return (
    <div className={className || "content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] w-[163px]"} id={isSettingsAndFalseAndOn ? "node-6155_47840" : isHelpCenterAndFalseAndOn ? "node-6155_47837" : isTasksAndFalseAndOn ? "node-6155_47834" : isNotificationsAndFalseAndOn ? "node-6155_47825" : "node-6155_47822"}>
      {isDashboardAndFalseAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47823" data-name="category-2">
            <div className="absolute contents inset-0" data-node-id="I6155:47823;3:33781" data-name="vuesax/linear/category-2">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:47823;3:33782" data-name="category-2">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory2} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47824">
            <p className="leading-[1.5]">Dashboard</p>
          </div>
        </>
      )}
      {isNotificationsAndFalseAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47826" data-name="notification">
            <div className="absolute contents inset-0" data-node-id="I6155:47826;3:36017" data-name="vuesax/linear/notification">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:47826;3:36018" data-name="notification">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotification} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47827">
            <p className="leading-[1.5]">Notifications</p>
          </div>
        </>
      )}
      {isTasksAndFalseAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47835" data-name="task-square">
            <div className="absolute contents inset-0" data-node-id="I6155:47835;3:36664" data-name="vuesax/linear/task-square">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:47835;3:36665" data-name="task-square">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTaskSquare} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47836">
            <p className="leading-[1.5]">Tasks</p>
          </div>
        </>
      )}
      {isHelpCenterAndFalseAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47838" data-name="message-question">
            <div className="absolute contents inset-0" data-node-id="I6155:47838;3:27563" data-name="vuesax/linear/message-question">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearMessageQuestion} />
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47839">
            <p className="leading-[1.5]">{`Help & Center`}</p>
          </div>
        </>
      )}
      {isSettingsAndFalseAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47841" data-name="setting">
            <div className="absolute contents inset-0" data-node-id="I6155:47841;3:33830" data-name="vuesax/linear/setting">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:47841;3:33831" data-name="setting">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSetting} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47842">
            <p className="leading-[1.5]">Settings</p>
          </div>
        </>
      )}
    </div>
  );
}

type DNotePageProps = {
  className?: string;
  responsive?: "No";
};

function DNotePage({ className, responsive = "No" }: DNotePageProps) {
  return (
    <div className={className || "bg-[#f1f1f5] content-stretch flex h-[900px] items-start overflow-clip relative w-[1440px]"} data-node-id="6233:53212">
      <div className="bg-[#020408] border-[#252528] border-r border-solid content-stretch flex flex-col gap-[16px] h-full items-end overflow-clip p-[16px] relative shrink-0 w-[260px]" data-node-id="6176:54797" data-name="Navigation">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6176:54797;6155:48409" data-name="Logo">
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0" data-node-id="I6176:54797;6155:48410" data-name="Company">
            <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-node-id="I6176:54797;6155:48411" data-name="logo">
              <div className="border-[0.693px] border-[rgba(255,255,255,0.15)] border-solid overflow-clip relative rounded-[5px] shadow-[0px_4.85px_6.929px_-4.158px_black,0px_0px_0px_1.386px_rgba(190,202,234,0.03)] shrink-0 size-[27.717px]" data-node-id="I6176:54797;6155:48411;20:1732" data-name="Logo">
                <div aria-hidden className="absolute bg-[#111113] inset-0 pointer-events-none rounded-[5px]" />
                <div className="absolute flex h-[44.542px] items-center justify-center left-[-7.21px] top-[-17.87px] w-[44.176px]" data-node-id="I6176:54797;6155:48411;20:1733">
                  <div className="-scale-y-100 flex-none rotate-30">
                    <div className="h-[32.972px] relative w-[31.973px]">
                      <div className="absolute inset-[-4.2%_-7.71%_-10.51%_-7.71%]">
                        <img alt="" className="block max-w-none size-full" src={imgGroup1} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.14px)] size-[20px] top-[calc(50%+0.14px)]" data-node-id="I6176:54797;6155:48411;6004:52006" data-name="user-octagon">
                  <div className="absolute contents inset-0" data-node-id="I6176:54797;6155:48411;6004:52006;3:13119" data-name="vuesax/bold/user-octagon">
                    <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6176:54797;6155:48411;6004:52006;3:13120" data-name="user-octagon">
                      <div className="absolute inset-[0_-6.38%_-84.17%_-43.33%]">
                        <img alt="" className="block max-w-none size-full" src={imgUserOctagon} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2.772px_6.929px_0px_rgba(255,255,255,0.11)]" />
              </div>
              <p className="[word-break:break-word] font-['Manrope:ExtraBold'] font-extrabold leading-[1.3] relative shrink-0 text-[16.212px] text-white tracking-[-0.6485px] whitespace-nowrap" data-node-id="I6176:54797;6155:48411;20:1850">
                Cliently
              </p>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="I6176:54797;6155:48412" data-name="arrow-down">
              <div className="absolute contents inset-0" data-node-id="I6176:54797;6155:48412;3:11318" data-name="vuesax/linear/arrow-down">
                <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6176:54797;6155:48412;3:11319" data-name="arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-node-id="I6176:54797;6155:48413" data-name="sidebar-left">
            <div className="absolute contents inset-0" data-node-id="I6176:54797;6155:48413;3:34669" data-name="vuesax/linear/sidebar-left">
              <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6176:54797;6155:48413;3:34670" data-name="sidebar-left">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLeft} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#252528] border border-[#44444a] border-solid content-stretch flex gap-[8px] items-center pl-[10px] pr-[12px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6176:54797;6155:48414" data-name="Profile">
          <AvatarMan1 className="relative shrink-0 size-[32px]" />
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px not-italic relative text-[12px] whitespace-nowrap" data-node-id="I6176:54797;6155:48416" data-name="Name">
            <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center overflow-hidden relative shrink-0 text-ellipsis text-white tracking-[-0.24px]" data-node-id="I6176:54797;6155:48417">
              <p className="leading-[normal] overflow-hidden text-ellipsis">John Cornor</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full overflow-hidden relative shrink-0 text-[#bebec8] text-ellipsis tracking-[-0.12px] w-[min-content]" data-node-id="I6176:54797;6155:48418">
              <p className="leading-[normal] overflow-hidden text-ellipsis">Johncornor@mail.com</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="I6176:54797;6155:48419" data-name="arrow-down">
            <div className="absolute contents inset-0" data-node-id="I6176:54797;6155:48419;3:11318" data-name="vuesax/linear/arrow-down">
              <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6176:54797;6155:48419;3:11319" data-name="arrow-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px relative w-full" data-node-id="I6176:54797;6155:48420" data-name="Menu">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I6176:54797;6155:48421" data-name="Main Menu">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6176:54797;6155:48422">
              <p className="leading-[normal]">Main Menu</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6176:54797;6155:48423" data-name="Main Menu">
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6176:54797;6155:48424" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6176:54797;6155:48424;6155:47823" data-name="category-2">
                  <div className="absolute contents inset-0" data-node-id="I6176:54797;6155:48424;6155:47823;3:33781" data-name="vuesax/linear/category-2">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6176:54797;6155:48424;6155:47823;3:33782" data-name="category-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory2} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6176:54797;6155:48424;6155:47824">
                  <p className="leading-[1.5]">Dashboard</p>
                </div>
              </div>
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notifications" />
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6176:54797;6155:48426" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6176:54797;6155:48426;6155:47829" data-name="message-text">
                  <div className="absolute contents inset-0" data-node-id="I6176:54797;6155:48426;6155:47829;3:14650" data-name="vuesax/linear/message-text">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6176:54797;6155:48426;6155:47829;3:14651" data-name="message-text">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessageText} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6176:54797;6155:48426;6155:47830">
                  <p className="leading-[1.5]">Emails</p>
                </div>
              </div>
              <div className="bg-[#252528] content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6176:54797;6155:48427" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6176:54797;6155:48427;6155:47853" data-name="note">
                  <div className="absolute contents inset-0" data-node-id="I6176:54797;6155:48427;6155:47853;3:42197" data-name="vuesax/linear/note">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6176:54797;6155:48427;6155:47853;3:42198" data-name="note">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNote} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="I6176:54797;6155:48427;6155:47854">
                  <p className="leading-[1.5]">Notes</p>
                </div>
              </div>
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Tasks" />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-node-id="I6176:54797;6155:48429" data-name="Favorite">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-node-id="I6176:54797;6155:48430">
              <div className="relative shrink-0 size-[14px]" data-node-id="I6176:54797;6155:48431" data-name="arrow-down">
                <div className="absolute contents inset-0" data-node-id="I6176:54797;6155:48431;3:11318" data-name="vuesax/linear/arrow-down">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6176:54797;6155:48431;3:11319" data-name="arrow-down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#5b5a64] text-[12px] tracking-[-0.24px]" data-node-id="I6176:54797;6155:48432">
                <p className="leading-[normal]">Favorites</p>
              </div>
              <div className="relative shrink-0 size-[14px]" data-node-id="I6176:54797;6155:48433" data-name="add">
                <div className="absolute contents inset-0" data-node-id="I6176:54797;6155:48433;3:29466" data-name="vuesax/linear/add">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6176:54797;6155:48433;3:29467" data-name="add">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6176:54797;6155:48434">
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6176:54797;6155:48435" data-name="Favorite">
                <div className="bg-[#dba014] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6176:54797;6155:48436" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6176:54797;6155:48437" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6176:54797;6155:48437;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6176:54797;6155:48437;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6176:54797;6155:48438">
                  <p className="leading-[1.5]">Primor Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6176:54797;6155:48439" data-name="Favorite">
                <div className="bg-[#3863c6] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6176:54797;6155:48440" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6176:54797;6155:48441" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6176:54797;6155:48441;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6176:54797;6155:48441;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6176:54797;6155:48442">
                  <p className="leading-[1.5]">Sulivan Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6176:54797;6155:48443" data-name="Favorite">
                <div className="bg-[#392fd0] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6176:54797;6155:48444" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6176:54797;6155:48445" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6176:54797;6155:48445;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6176:54797;6155:48445;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6176:54797;6155:48446">
                  <p className="leading-[1.5]">Trustworth Project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6176:54797;6155:48447" data-name="Other">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6176:54797;6155:48448">
              <p className="leading-[normal]">Other</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6176:54797;6155:48449" data-name="Menu">
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Help & Center" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Settings" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#161618] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1180px]" data-node-id="6146:21485" data-name="Main">
        <div className="bg-[#161618] border-[#252528] border-b border-solid content-stretch flex items-center justify-between overflow-clip px-[24px] py-[13px] relative shrink-0 w-full" data-node-id="6146:21486" data-name="Header">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap" data-node-id="6146:21487">
            <p className="leading-[1.5]">{`Notes `}</p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6177:55264" data-name="Buttons">
            <div className="bg-[#252528] border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[32px] items-center overflow-clip px-[16px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[184px]" data-node-id="6177:55265" data-name="Button">
              <div className="relative shrink-0 size-[16px]" data-node-id="6177:55266" data-name="search-normal">
                <div className="absolute contents inset-0" data-node-id="I6177:55266;3:21503" data-name="vuesax/linear/search-normal">
                  <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6177:55266;3:21504" data-name="search-normal">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearchNormal} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] text-center tracking-[-0.12px] whitespace-nowrap" data-node-id="6177:55267">
                Search Note
              </p>
            </div>
            <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shrink-0 w-[127px]" data-node-id="6177:55268" data-name="Button">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
              <div className="relative shrink-0 size-[16px]" data-node-id="I6177:55268;6155:20976" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6177:55268;6155:20977">
                Create Note
              </p>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] h-[842px] items-start p-[24px] relative shrink-0 w-full" data-node-id="6146:21493" data-name="Cards">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.4px] whitespace-nowrap" data-node-id="6146:21494">
            Keep Every Detail Close 📝
          </p>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="6146:21495">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap" data-node-id="6146:21496">
              Favorite Notes
            </p>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-node-id="6146:21497" data-name="Headcount">
              <div className="bg-[#effcd3] border border-[#e5e5ec] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[10px] shrink-0 w-[366.667px]" data-node-id="6146:21498" data-name="All Card">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6146:21498;6116:17658" data-name="Icons">
                  <div className="relative shrink-0 size-[32px]" data-node-id="I6146:21498;6116:17659" data-name="stickynote">
                    <div className="absolute contents inset-0" data-node-id="I6146:21498;6116:17659;3:36839" data-name="vuesax/bold/stickynote">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxBoldStickynote} />
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="I6146:21498;6116:17660">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6146:21498;6116:17660;3:34106" data-name="vuesax/linear/more">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearMore} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="I6146:21498;6116:17661" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] w-full" data-node-id="I6146:21498;6116:17662">
                    Proposal Strategy – TechNova Inc.
                  </p>
                  <p className="font-['Inter:Medium'] font-medium h-[41px] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full" data-node-id="I6146:21498;6116:17663">
                    “Send revised proposal by March 28 with optional add-ons. They’re very price-sensitive, but interested in long-term support contracts.”
                  </p>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I6146:21498;6116:17664" data-name="Line">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgLine} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-full" data-node-id="I6146:21498;6116:17665" data-name="User">
                  <AvatarMan1 className="relative shrink-0 size-[24px]" property1="24px" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="I6146:21498;6116:17667">
                    John Cornor
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6146:21498;6116:17668">
                    March 25, 2025
                  </p>
                </div>
              </div>
              <div className="bg-[#dcd9fe] border border-[#e5e5ec] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[10px] shrink-0 w-[366.667px]" data-node-id="6146:21499" data-name="All Card">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6146:21499;6116:17658" data-name="Icons">
                  <div className="relative shrink-0 size-[32px]" data-node-id="I6146:21499;6116:17659" data-name="stickynote">
                    <div className="absolute contents inset-0" data-node-id="I6146:21499;6116:17659;3:36839" data-name="vuesax/bold/stickynote">
                      <div className="absolute bottom-1/4 left-0 right-1/4 top-0" data-node-id="I6146:21499;6116:17659;3:36840" data-name="stickynote">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStickynote} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="I6146:21499;6116:17660">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6146:21499;6116:17660;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:21499;6116:17660;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="I6146:21499;6116:17661" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] w-full" data-node-id="I6146:21499;6116:17662">
                    Key Talking Points – BrightCorp
                  </p>
                  <p className="font-['Inter:Medium'] font-medium h-[41px] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full" data-node-id="I6146:21499;6116:17663">
                    “Focus on security and compliance features. They’re in final review phase. John Carter has strong influence in decision-making.”
                  </p>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I6146:21499;6116:17664" data-name="Line">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgLine} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-full" data-node-id="I6146:21499;6116:17665" data-name="User">
                  <AvatarMan1 className="relative shrink-0 size-[24px]" property1="24px" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="I6146:21499;6116:17667">
                    John Cornor
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6146:21499;6116:17668">
                    March 25, 2025
                  </p>
                </div>
              </div>
              <div className="bg-[#ffe7d6] border border-[#e5e5ec] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[10px] shrink-0 w-[366.667px]" data-node-id="6146:21500" data-name="All Card">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6146:21500;6116:17658" data-name="Icons">
                  <div className="relative shrink-0 size-[32px]" data-node-id="I6146:21500;6116:17659" data-name="stickynote">
                    <div className="absolute contents inset-0" data-node-id="I6146:21500;6116:17659;3:36839" data-name="vuesax/bold/stickynote">
                      <div className="absolute bottom-1/4 left-0 right-1/4 top-0" data-node-id="I6146:21500;6116:17659;3:36840" data-name="stickynote">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStickynote} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="I6146:21500;6116:17660">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6146:21500;6116:17660;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:21500;6116:17660;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="I6146:21500;6116:17661" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] w-full" data-node-id="I6146:21500;6116:17662">
                    Objections Handling – Davis Tech
                  </p>
                  <p className="font-['Inter:Medium'] font-medium h-[41px] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full" data-node-id="I6146:21500;6116:17663">
                    “Top concern is onboarding time. Prepare 2-week fast-track plan to ease their worries.”
                  </p>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I6146:21500;6116:17664" data-name="Line">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgLine} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-full" data-node-id="I6146:21500;6116:17665" data-name="User">
                  <AvatarMan1 className="relative shrink-0 size-[24px]" property1="24px" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="I6146:21500;6116:17667">
                    John Cornor
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6146:21500;6116:17668">
                    March 25, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="6146:21501">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap" data-node-id="6146:21502">
              List Notes
            </p>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-node-id="6146:21503" data-name="Headcount">
              <div className="bg-[#fff7d1] border border-[#e5e5ec] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[10px] shrink-0 w-[366.667px]" data-node-id="6146:21504" data-name="All Card">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6146:21504;6116:17658" data-name="Icons">
                  <div className="relative shrink-0 size-[32px]" data-node-id="I6146:21504;6116:17659" data-name="stickynote">
                    <div className="absolute contents inset-0" data-node-id="I6146:21504;6116:17659;3:36839" data-name="vuesax/bold/stickynote">
                      <div className="absolute bottom-1/4 left-0 right-1/4 top-0" data-node-id="I6146:21504;6116:17659;3:36840" data-name="stickynote">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStickynote} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="I6146:21504;6116:17660">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6146:21504;6116:17660;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:21504;6116:17660;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="I6146:21504;6116:17661" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] w-full" data-node-id="I6146:21504;6116:17662">
                    Discovery Call – GreenTech
                  </p>
                  <p className="font-['Inter:Medium'] font-medium h-[41px] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full" data-node-id="I6146:21504;6116:17663">
                    “Alex emphasized the need for custom reporting. They’re evaluating three vendors but leaning toward us due to our integration capabilities. Key concern: timeline flexibility.”
                  </p>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I6146:21504;6116:17664" data-name="Line">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgLine} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-full" data-node-id="I6146:21504;6116:17665" data-name="User">
                  <AvatarMan1 className="relative shrink-0 size-[24px]" property1="24px" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="I6146:21504;6116:17667">
                    John Cornor
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6146:21504;6116:17668">
                    March 25, 2025
                  </p>
                </div>
              </div>
              <div className="bg-[#effcd3] border border-[#e5e5ec] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[10px] shrink-0 w-[366.667px]" data-node-id="6146:21505" data-name="All Card">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6146:21505;6116:17658" data-name="Icons">
                  <div className="relative shrink-0 size-[32px]" data-node-id="I6146:21505;6116:17659" data-name="stickynote">
                    <div className="absolute contents inset-0" data-node-id="I6146:21505;6116:17659;3:36839" data-name="vuesax/bold/stickynote">
                      <div className="absolute bottom-1/4 left-0 right-1/4 top-0" data-node-id="I6146:21505;6116:17659;3:36840" data-name="stickynote">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStickynote} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="I6146:21505;6116:17660">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6146:21505;6116:17660;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:21505;6116:17660;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-node-id="I6146:21505;6116:17661" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] w-full" data-node-id="I6146:21505;6116:17662">
                    Onboarding Tasks – New Clients
                  </p>
                  <div className="font-['Inter:Medium'] font-medium h-[41px] leading-[0] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full whitespace-pre-wrap" data-node-id="I6146:21505;6116:17663">
                    <p className="leading-[1.5] mb-0">{`	•	Welcome email`}</p>
                    <p className="leading-[1.5]">{`	•	Kickoff meeting`}</p>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I6146:21505;6116:17664" data-name="Line">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgLine} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-full" data-node-id="I6146:21505;6116:17665" data-name="User">
                  <AvatarMan1 className="relative shrink-0 size-[24px]" property1="24px" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="I6146:21505;6116:17667">
                    John Cornor
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6146:21505;6116:17668">
                    March 25, 2025
                  </p>
                </div>
              </div>
              <div className="bg-[#ffe7d6] border border-[#e5e5ec] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[10px] shrink-0 w-[366.667px]" data-node-id="6146:21506" data-name="All Card">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6146:21506;6116:17658" data-name="Icons">
                  <div className="relative shrink-0 size-[32px]" data-node-id="I6146:21506;6116:17659" data-name="stickynote">
                    <div className="absolute contents inset-0" data-node-id="I6146:21506;6116:17659;3:36839" data-name="vuesax/bold/stickynote">
                      <div className="absolute bottom-1/4 left-0 right-1/4 top-0" data-node-id="I6146:21506;6116:17659;3:36840" data-name="stickynote">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStickynote} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="I6146:21506;6116:17660">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6146:21506;6116:17660;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:21506;6116:17660;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="I6146:21506;6116:17661" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] w-full" data-node-id="I6146:21506;6116:17662">
                    Q2 Goals – Internal Sales Team
                  </p>
                  <p className="font-['Inter:Medium'] font-medium h-[41px] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full" data-node-id="I6146:21506;6116:17663">
                    “Target: Increase close rate by 15%. Focus on upselling to existing clients. Weekly performance syncs to begin April 1.”
                  </p>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I6146:21506;6116:17664" data-name="Line">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgLine} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-full" data-node-id="I6146:21506;6116:17665" data-name="User">
                  <AvatarMan1 className="relative shrink-0 size-[24px]" property1="24px" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="I6146:21506;6116:17667">
                    John Cornor
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6146:21506;6116:17668">
                    March 25, 2025
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-node-id="6146:21507" data-name="Headcount">
              <div className="bg-[#dbecfd] border border-[#e5e5ec] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[10px] shrink-0 w-[366.667px]" data-node-id="6146:21508" data-name="All Card">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6146:21508;6116:17658" data-name="Icons">
                  <div className="relative shrink-0 size-[32px]" data-node-id="I6146:21508;6116:17659" data-name="stickynote">
                    <div className="absolute contents inset-0" data-node-id="I6146:21508;6116:17659;3:36839" data-name="vuesax/bold/stickynote">
                      <div className="absolute bottom-1/4 left-0 right-1/4 top-0" data-node-id="I6146:21508;6116:17659;3:36840" data-name="stickynote">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStickynote} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="I6146:21508;6116:17660">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6146:21508;6116:17660;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:21508;6116:17660;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-node-id="I6146:21508;6116:17661" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] w-full" data-node-id="I6146:21508;6116:17662">
                    Follow-Up Checklist – Alex Spencer
                  </p>
                  <div className="font-['Inter:Medium'] font-medium h-[41px] leading-[0] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full whitespace-pre-wrap" data-node-id="I6146:21508;6116:17663">
                    <p className="leading-[1.5] mb-0">{`	•	Send case studies`}</p>
                    <p className="leading-[1.5]">{`	•	Schedule call for March 26`}</p>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I6146:21508;6116:17664" data-name="Line">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgLine} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-full" data-node-id="I6146:21508;6116:17665" data-name="User">
                  <AvatarMan1 className="relative shrink-0 size-[24px]" property1="24px" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="I6146:21508;6116:17667">
                    John Cornor
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6146:21508;6116:17668">
                    March 25, 2025
                  </p>
                </div>
              </div>
              <div className="bg-[#ffe7d6] border border-[#e5e5ec] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[10px] shrink-0 w-[366.667px]" data-node-id="6146:21509" data-name="All Card">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6146:21509;6116:17658" data-name="Icons">
                  <div className="relative shrink-0 size-[32px]" data-node-id="I6146:21509;6116:17659" data-name="stickynote">
                    <div className="absolute contents inset-0" data-node-id="I6146:21509;6116:17659;3:36839" data-name="vuesax/bold/stickynote">
                      <div className="absolute bottom-1/4 left-0 right-1/4 top-0" data-node-id="I6146:21509;6116:17659;3:36840" data-name="stickynote">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStickynote} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="I6146:21509;6116:17660">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6146:21509;6116:17660;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:21509;6116:17660;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="I6146:21509;6116:17661" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] w-full" data-node-id="I6146:21509;6116:17662">
                    Demo Feedback – Davis Tech
                  </p>
                  <p className="font-['Inter:Medium'] font-medium h-[41px] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full" data-node-id="I6146:21509;6116:17663">
                    “Emily liked the automation flow but requested a lighter UI for their mobile reps. Suggested sending them mockups next week.”
                  </p>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I6146:21509;6116:17664" data-name="Line">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgLine} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-full" data-node-id="I6146:21509;6116:17665" data-name="User">
                  <AvatarMan1 className="relative shrink-0 size-[24px]" property1="24px" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="I6146:21509;6116:17667">
                    John Cornor
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6146:21509;6116:17668">
                    March 25, 2025
                  </p>
                </div>
              </div>
              <div className="bg-[#dcd9fe] border border-[#e5e5ec] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[10px] shrink-0 w-[366.667px]" data-node-id="6146:21510" data-name="All Card">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6146:21510;6116:17658" data-name="Icons">
                  <div className="relative shrink-0 size-[32px]" data-node-id="I6146:21510;6116:17659" data-name="stickynote">
                    <div className="absolute contents inset-0" data-node-id="I6146:21510;6116:17659;3:36839" data-name="vuesax/bold/stickynote">
                      <div className="absolute bottom-1/4 left-0 right-1/4 top-0" data-node-id="I6146:21510;6116:17659;3:36840" data-name="stickynote">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStickynote} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="I6146:21510;6116:17660">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6146:21510;6116:17660;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:21510;6116:17660;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-node-id="I6146:21510;6116:17661" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] w-full" data-node-id="I6146:21510;6116:17662">{` Internal Content Requests`}</p>
                  <div className="font-['Inter:Medium'] font-medium h-[41px] leading-[0] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full whitespace-pre-wrap" data-node-id="I6146:21510;6116:17663">
                    <p className="leading-[1.5] mb-0">{`	•	Create one-pager for “AI Features”`}</p>
                    <p className="leading-[1.5]">{`	•	Write FAQ on user roles`}</p>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I6146:21510;6116:17664" data-name="Line">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgLine} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-full" data-node-id="I6146:21510;6116:17665" data-name="User">
                  <AvatarMan1 className="relative shrink-0 size-[24px]" property1="24px" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="I6146:21510;6116:17667">
                    John Cornor
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6146:21510;6116:17668">
                    March 25, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#252528] border border-[#44444a] border-solid content-stretch flex flex-col gap-[8px] items-start justify-center left-[215px] overflow-clip p-[8px] rounded-[12px] shadow-[7px_24px_24px_-7px_rgba(0,0,0,0.25)] top-[131px] w-[141px]" data-node-id="6146:21511" data-name="Popup">
            <div className="content-stretch flex gap-[10px] items-center p-[8px] relative shrink-0 w-full" data-node-id="6146:21512" data-name="Add New">
              <div className="relative shrink-0 size-[20px]" data-node-id="6146:21513" data-name="edit-2">
                <div className="absolute contents inset-0" data-node-id="I6146:21513;3:37087" data-name="vuesax/linear/edit-2">
                  <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6146:21513;3:37088" data-name="edit-2">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEdit2} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6146:21514">
                Edit
              </p>
            </div>
            <div className="content-stretch flex gap-[10px] items-center p-[8px] relative shrink-0 w-full" data-node-id="6146:21515" data-name="Add New">
              <div className="relative shrink-0 size-[20px]" data-node-id="6146:21516" data-name="send-2">
                <div className="absolute contents inset-0" data-node-id="I6146:21516;3:29774" data-name="vuesax/linear/send-2">
                  <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6146:21516;3:29775" data-name="send-2">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSend2} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6146:21517">
                Share
              </p>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-node-id="6146:21518" data-name="Line">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine1} />
              </div>
            </div>
            <div className="content-stretch flex gap-[10px] items-center p-[8px] relative shrink-0 w-full" data-node-id="6146:21519" data-name="Add New">
              <div className="relative shrink-0 size-[20px]" data-node-id="6146:21520" data-name="trash">
                <div className="absolute contents inset-0" data-node-id="I6146:21520;3:28733" data-name="vuesax/linear/trash">
                  <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6146:21520;3:28734" data-name="trash">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6146:21521">
                Delete
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
