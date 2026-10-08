const assetPathPrefix = "https://www.figma.com/api/mcp/asset/5c4e017e-e54e-4a77-850b-98d703d4ea23";
const imgCategory2 = `${assetPathPrefix}/165b9.svg`;
const imgNotification = `${assetPathPrefix}/a31fd.svg`;
const imgMessageText = `${assetPathPrefix}/925fe.svg`;
const imgNote = `${assetPathPrefix}/46e76.svg`;
const imgTaskSquare = `${assetPathPrefix}/85b6d.svg`;
const imgProperty132Px = `${assetPathPrefix}/75dac.png`;
const imgImage = `${assetPathPrefix}/ea216.png`;
const imgGroup1 = `${assetPathPrefix}/72053.svg`;
const imgUserOctagon = `${assetPathPrefix}/deb54.svg`;
const imgArrowDown = `${assetPathPrefix}/71b71.svg`;
const imgSidebarLeft = `${assetPathPrefix}/9f2cf.svg`;
const imgAdd = `${assetPathPrefix}/509d0.svg`;
const imgFolder2 = `${assetPathPrefix}/c4cc5.svg`;
const imgVuesaxLinearMessageQuestion = `${assetPathPrefix}/bcf30.svg`;
const imgSetting = `${assetPathPrefix}/ca8b3.svg`;
const imgArrowLeft = `${assetPathPrefix}/4e2e8.svg`;

type NavMenuProps = {
  className?: string;
  active?: boolean;
  darkmode?: "On";
  menu?: "Dashboard" | "Notifications" | "Emails" | "Notes" | "Tasks";
};

function NavMenu({ className, active = false, darkmode = "On", menu = "Dashboard" }: NavMenuProps) {
  const isDashboardAndFalseAndOn = menu === "Dashboard" && !active && darkmode === "On";
  const isEmailsAndFalseAndOn = menu === "Emails" && !active && darkmode === "On";
  const isNotesAndFalseAndOn = menu === "Notes" && !active && darkmode === "On";
  const isNotificationsAndFalseAndOn = menu === "Notifications" && !active && darkmode === "On";
  const isTasksAndFalseAndOn = menu === "Tasks" && !active && darkmode === "On";
  return (
    <div className={className || "content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] w-[163px]"} id={isTasksAndFalseAndOn ? "node-6155_47834" : isNotesAndFalseAndOn ? "node-6155_47831" : isEmailsAndFalseAndOn ? "node-6155_47828" : isNotificationsAndFalseAndOn ? "node-6155_47825" : "node-6155_47822"}>
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
      {isEmailsAndFalseAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47829" data-name="message-text">
            <div className="absolute contents inset-0" data-node-id="I6155:47829;3:14650" data-name="vuesax/linear/message-text">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:47829;3:14651" data-name="message-text">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessageText} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47830">
            <p className="leading-[1.5]">Emails</p>
          </div>
        </>
      )}
      {isNotesAndFalseAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47832" data-name="note">
            <div className="absolute contents inset-0" data-node-id="I6155:47832;3:42197" data-name="vuesax/linear/note">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:47832;3:42198" data-name="note">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNote} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47833">
            <p className="leading-[1.5]">Notes</p>
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
    </div>
  );
}

type AvatarMan1Props = {
  className?: string;
  property1?: "32px";
};

function AvatarMan1({ className, property1 = "32px" }: AvatarMan1Props) {
  return (
    <div className={className || "relative size-[32px]"} data-node-id="3:1842">
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="32" src={imgProperty132Px} width="32" />
    </div>
  );
}

type DHelpCenterDetailsTopicsProps = {
  className?: string;
  responsive?: "No";
};

function DHelpCenterDetailsTopics({ className, responsive = "No" }: DHelpCenterDetailsTopicsProps) {
  return (
    <div className={className || "bg-[#f1f1f5] content-stretch flex h-[1220px] items-start overflow-clip relative w-[1440px]"} data-node-id="6237:53579">
      <div className="bg-[#020408] border-[#252528] border-r border-solid content-stretch flex flex-col gap-[16px] h-full items-end overflow-clip p-[16px] relative shrink-0 w-[260px]" data-node-id="6231:38957" data-name="Navigation">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6231:38957;6155:48409" data-name="Logo">
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0" data-node-id="I6231:38957;6155:48410" data-name="Company">
            <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-node-id="I6231:38957;6155:48411" data-name="logo">
              <div className="border-[0.693px] border-[rgba(255,255,255,0.15)] border-solid overflow-clip relative rounded-[5px] shadow-[0px_4.85px_6.929px_-4.158px_black,0px_0px_0px_1.386px_rgba(190,202,234,0.03)] shrink-0 size-[27.717px]" data-node-id="I6231:38957;6155:48411;20:1732" data-name="Logo">
                <div aria-hidden className="absolute bg-[#111113] inset-0 pointer-events-none rounded-[5px]" />
                <div className="absolute flex h-[44.542px] items-center justify-center left-[-7.21px] top-[-17.87px] w-[44.176px]" data-node-id="I6231:38957;6155:48411;20:1733">
                  <div className="-scale-y-100 flex-none rotate-30">
                    <div className="h-[32.972px] relative w-[31.973px]">
                      <div className="absolute inset-[-4.2%_-7.71%_-10.51%_-7.71%]">
                        <img alt="" className="block max-w-none size-full" src={imgGroup1} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.14px)] size-[20px] top-[calc(50%+0.14px)]" data-node-id="I6231:38957;6155:48411;6004:52006" data-name="user-octagon">
                  <div className="absolute contents inset-0" data-node-id="I6231:38957;6155:48411;6004:52006;3:13119" data-name="vuesax/bold/user-octagon">
                    <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6231:38957;6155:48411;6004:52006;3:13120" data-name="user-octagon">
                      <div className="absolute inset-[0_-6.38%_-84.17%_-43.33%]">
                        <img alt="" className="block max-w-none size-full" src={imgUserOctagon} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2.772px_6.929px_0px_rgba(255,255,255,0.11)]" />
              </div>
              <p className="[word-break:break-word] font-['Manrope:ExtraBold'] font-extrabold leading-[1.3] relative shrink-0 text-[16.212px] text-white tracking-[-0.6485px] whitespace-nowrap" data-node-id="I6231:38957;6155:48411;20:1850">
                Cliently
              </p>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="I6231:38957;6155:48412" data-name="arrow-down">
              <div className="absolute contents inset-0" data-node-id="I6231:38957;6155:48412;3:11318" data-name="vuesax/linear/arrow-down">
                <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6231:38957;6155:48412;3:11319" data-name="arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-node-id="I6231:38957;6155:48413" data-name="sidebar-left">
            <div className="absolute contents inset-0" data-node-id="I6231:38957;6155:48413;3:34669" data-name="vuesax/linear/sidebar-left">
              <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6231:38957;6155:48413;3:34670" data-name="sidebar-left">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLeft} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#252528] border border-[#44444a] border-solid content-stretch flex gap-[8px] items-center pl-[10px] pr-[12px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6231:38957;6155:48414" data-name="Profile">
          <AvatarMan1 className="relative shrink-0 size-[32px]" />
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px not-italic relative text-[12px] whitespace-nowrap" data-node-id="I6231:38957;6155:48416" data-name="Name">
            <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center overflow-hidden relative shrink-0 text-ellipsis text-white tracking-[-0.24px]" data-node-id="I6231:38957;6155:48417">
              <p className="leading-[normal] overflow-hidden text-ellipsis">John Cornor</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full overflow-hidden relative shrink-0 text-[#bebec8] text-ellipsis tracking-[-0.12px] w-[min-content]" data-node-id="I6231:38957;6155:48418">
              <p className="leading-[normal] overflow-hidden text-ellipsis">Johncornor@mail.com</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="I6231:38957;6155:48419" data-name="arrow-down">
            <div className="absolute contents inset-0" data-node-id="I6231:38957;6155:48419;3:11318" data-name="vuesax/linear/arrow-down">
              <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6231:38957;6155:48419;3:11319" data-name="arrow-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px relative w-full" data-node-id="I6231:38957;6155:48420" data-name="Menu">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I6231:38957;6155:48421" data-name="Main Menu">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6231:38957;6155:48422">
              <p className="leading-[normal]">Main Menu</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6231:38957;6155:48423" data-name="Main Menu">
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6231:38957;6155:48424" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6231:38957;6155:48424;6155:47823" data-name="category-2">
                  <div className="absolute contents inset-0" data-node-id="I6231:38957;6155:48424;6155:47823;3:33781" data-name="vuesax/linear/category-2">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6231:38957;6155:48424;6155:47823;3:33782" data-name="category-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory2} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6231:38957;6155:48424;6155:47824">
                  <p className="leading-[1.5]">Dashboard</p>
                </div>
              </div>
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notifications" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Emails" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notes" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Tasks" />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-node-id="I6231:38957;6155:48429" data-name="Favorite">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-node-id="I6231:38957;6155:48430">
              <div className="relative shrink-0 size-[14px]" data-node-id="I6231:38957;6155:48431" data-name="arrow-down">
                <div className="absolute contents inset-0" data-node-id="I6231:38957;6155:48431;3:11318" data-name="vuesax/linear/arrow-down">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6231:38957;6155:48431;3:11319" data-name="arrow-down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#5b5a64] text-[12px] tracking-[-0.24px]" data-node-id="I6231:38957;6155:48432">
                <p className="leading-[normal]">Favorites</p>
              </div>
              <div className="relative shrink-0 size-[14px]" data-node-id="I6231:38957;6155:48433" data-name="add">
                <div className="absolute contents inset-0" data-node-id="I6231:38957;6155:48433;3:29466" data-name="vuesax/linear/add">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6231:38957;6155:48433;3:29467" data-name="add">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6231:38957;6155:48434">
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6231:38957;6155:48435" data-name="Favorite">
                <div className="bg-[#dba014] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6231:38957;6155:48436" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6231:38957;6155:48437" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6231:38957;6155:48437;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6231:38957;6155:48437;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6231:38957;6155:48438">
                  <p className="leading-[1.5]">Primor Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6231:38957;6155:48439" data-name="Favorite">
                <div className="bg-[#3863c6] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6231:38957;6155:48440" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6231:38957;6155:48441" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6231:38957;6155:48441;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6231:38957;6155:48441;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6231:38957;6155:48442">
                  <p className="leading-[1.5]">Sulivan Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6231:38957;6155:48443" data-name="Favorite">
                <div className="bg-[#392fd0] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6231:38957;6155:48444" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6231:38957;6155:48445" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6231:38957;6155:48445;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6231:38957;6155:48445;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6231:38957;6155:48446">
                  <p className="leading-[1.5]">Trustworth Project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6231:38957;6155:48447" data-name="Other">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6231:38957;6155:48448">
              <p className="leading-[normal]">Other</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6231:38957;6155:48449" data-name="Menu">
              <div className="bg-[#252528] content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6231:38957;6155:48450" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6231:38957;6155:48450;6155:47859" data-name="message-question">
                  <div className="absolute contents inset-0" data-node-id="I6231:38957;6155:48450;6155:47859;3:27563" data-name="vuesax/linear/message-question">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearMessageQuestion} />
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="I6231:38957;6155:48450;6155:47860">
                  <p className="leading-[1.5]">{`Help & Center`}</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6231:38957;6155:48451" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6231:38957;6155:48451;6155:47841" data-name="setting">
                  <div className="absolute contents inset-0" data-node-id="I6231:38957;6155:48451;6155:47841;3:33830" data-name="vuesax/linear/setting">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6231:38957;6155:48451;6155:47841;3:33831" data-name="setting">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSetting} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6231:38957;6155:48451;6155:47842">
                  <p className="leading-[1.5]">Settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0 w-[1180px]" data-node-id="6193:46828" data-name="Main">
        <div className="bg-[#161618] border-[#252528] border-b border-solid content-stretch flex gap-[8px] h-[58px] items-center overflow-clip px-[24px] py-[13px] relative shrink-0 w-full" data-node-id="6193:46829" data-name="Header">
          <div className="relative shrink-0 size-[20px]" data-node-id="6193:46830" data-name="arrow-left">
            <div className="absolute contents inset-0" data-node-id="I6193:46830;3:11458" data-name="vuesax/linear/arrow-left">
              <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6193:46830;3:11459" data-name="arrow-left">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:46831">
            <p className="leading-[1.5]">{`Help & Center`}</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:46832">
            <p className="leading-[1.5]">/</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:46833">
            <p className="leading-[1.5]">Topics</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:46834">
            <p className="leading-[1.5]">/</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:46835">
            <p className="leading-[1.5]">Customize CRM</p>
          </div>
        </div>
        <div className="bg-[#161618] content-stretch flex flex-[1_0_0] gap-[80px] items-start min-h-px px-[80px] py-[40px] relative w-full" data-node-id="6193:46836" data-name="Main Help">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-node-id="6193:46837" data-name="Main Content">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6193:46838" data-name="Text">
              <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#f1f1f5] text-[32px] tracking-[-0.96px]" data-node-id="6193:46839">
                Customize CRM
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px]" data-node-id="6193:46840">
                From custom fields to personalized pipelines, make your CRM work the way you do
              </p>
            </div>
            <div className="h-[277px] relative rounded-[10px] shrink-0 w-full" data-node-id="6193:46841" data-name="image">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6193:46842" data-name="Text">
              <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#f1f1f5] text-[20px] tracking-[-0.4px]" data-node-id="6193:46843">
                1. Create Custom Fields
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px]" data-node-id="6193:46844">
                Track exactly what matters by adding fields tailored to your leads, deals, or contacts.
              </p>
              <ul className="block font-['Inter:Regular'] font-normal leading-[0] list-disc relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px]" data-node-id="6193:46845">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[1.5]">Add text, dropdowns, dates, checkboxes, or tags</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[1.5]">Use custom fields in filters, automations, and reports</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[1.5]">Example: “Lead Source,” “Product Interest,” “Account Tier”</span>
                </li>
              </ul>
              <p className="font-['Inter:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px]" data-node-id="6193:46846">{`📌 Go to: Settings > Custom Fields`}</p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6193:46847" data-name="Text">
              <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#f1f1f5] text-[20px] tracking-[-0.4px]" data-node-id="6193:46848">
                2. Build Your Sales Pipelines
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px]" data-node-id="6193:46849">
                Design unique workflows for sales, support, or onboarding teams.
              </p>
              <ul className="block font-['Inter:Regular'] font-normal leading-[0] list-disc relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px]" data-node-id="6193:46850">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[1.5]">Add or rename pipeline stages (e.g., “Qualified → Demo → Proposal”)</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[1.5]">Set stage goals and probabilities</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[1.5]">Assign pipelines to specific teams or users</span>
                </li>
              </ul>
              <p className="font-['Inter:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px]" data-node-id="6193:46851">{`📌 Go to: Pipelines > Manage Pipelines`}</p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6193:46852" data-name="Text">
              <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#f1f1f5] text-[20px] tracking-[-0.4px]" data-node-id="6193:46853">{`3. Personalize Views & Layouts`}</p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px]" data-node-id="6193:46854">
                Make your dashboard easier to scan and more actionable.
              </p>
              <ul className="block font-['Inter:Regular'] font-normal leading-[0] list-disc relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px]" data-node-id="6193:46855">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[1.5]">Add or rename pipeline stages (e.g., “Qualified → Demo → Proposal”)</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[1.5]">Set stage goals and probabilities</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[1.5]">Assign pipelines to specific teams or users</span>
                </li>
              </ul>
              <p className="font-['Inter:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px]" data-node-id="6193:46856">{`📌 Go to: Pipelines > Manage Pipelines`}</p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6193:46857" data-name="Text">
              <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#f1f1f5] text-[20px] tracking-[-0.4px]" data-node-id="6193:46858">
                4. Automate Repetitive Work
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px]" data-node-id="6193:46859">
                Trigger actions automatically based on lead behavior or pipeline stage.
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[14px] tracking-[-0.28px] w-[225px]" data-node-id="6193:46860" data-name="Link">
            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#f1f1f5] whitespace-nowrap" data-node-id="6193:46861">
              On This Page
            </p>
            <ol className="block font-['Inter:Semi_Bold'] font-semibold leading-[0] list-decimal min-w-full relative shrink-0 text-[#f1f1f5] w-[min-content]" data-node-id="6193:46862" start="1">
              <li className="ms-[21px]">
                <span className="leading-[1.5]">Create Custom Fields</span>
              </li>
            </ol>
            <ol className="block font-['Inter:Regular'] font-normal leading-[0] list-decimal relative shrink-0 text-[#bebec8] whitespace-nowrap" data-node-id="6193:46863" start="2">
              <li className="ms-[21px]">
                <span className="leading-[1.5]">Build Your Sales Pipelines</span>
              </li>
            </ol>
            <ol className="block font-['Inter:Regular'] font-normal leading-[0] list-decimal min-w-full relative shrink-0 text-[#bebec8] w-[min-content]" data-node-id="6193:46864" start="3">
              <li className="ms-[21px]">
                <span className="leading-[1.5]">{`Personalize Views & Layouts`}</span>
              </li>
            </ol>
            <ol className="block font-['Inter:Regular'] font-normal leading-[0] list-decimal min-w-full relative shrink-0 text-[#bebec8] w-[min-content]" data-node-id="6193:46865" start="4">
              <li className="ms-[21px]">
                <span className="leading-[1.5]">Automate Repetitive Work</span>
              </li>
            </ol>
            <ol className="block font-['Inter:Regular'] font-normal leading-[0] list-decimal min-w-full relative shrink-0 text-[#bebec8] w-[min-content]" data-node-id="6193:46866" start="5">
              <li className="ms-[21px]">
                <span className="leading-[1.5]">Integrate with Your Favorite Tools</span>
              </li>
            </ol>
            <p className="font-['Inter:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#bebec8] w-[min-content]" data-node-id="6193:46867">
              📣 Need Help Customizing?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
