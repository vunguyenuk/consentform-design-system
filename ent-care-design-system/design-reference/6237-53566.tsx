const assetPathPrefix = "https://www.figma.com/api/mcp/asset/bd67271f-07ad-4ae1-964d-5377a0fa0b66";
const imgCategory2 = `${assetPathPrefix}/165b9.svg`;
const imgNotification = `${assetPathPrefix}/a31fd.svg`;
const imgMessageText = `${assetPathPrefix}/925fe.svg`;
const imgNote = `${assetPathPrefix}/46e76.svg`;
const imgTaskSquare = `${assetPathPrefix}/85b6d.svg`;
const imgProperty132Px = `${assetPathPrefix}/75dac.png`;
const imgGroup1 = `${assetPathPrefix}/72053.svg`;
const imgUserOctagon = `${assetPathPrefix}/deb54.svg`;
const imgArrowDown = `${assetPathPrefix}/71b71.svg`;
const imgSidebarLeft = `${assetPathPrefix}/9f2cf.svg`;
const imgAdd = `${assetPathPrefix}/509d0.svg`;
const imgFolder2 = `${assetPathPrefix}/c4cc5.svg`;
const imgVuesaxLinearMessageQuestion = `${assetPathPrefix}/bcf30.svg`;
const imgSetting = `${assetPathPrefix}/ca8b3.svg`;
const imgSearchNormal = `${assetPathPrefix}/98eec.svg`;
const imgVuesaxLinearStar = `${assetPathPrefix}/21146.svg`;
const imgEdit = `${assetPathPrefix}/8c6d6.svg`;
const imgWalletMoney = `${assetPathPrefix}/d67d3.svg`;
const imgCategory3 = `${assetPathPrefix}/adc6a.svg`;
const imgMinus = `${assetPathPrefix}/3bd8a.svg`;
const imgAdd1 = `${assetPathPrefix}/e66bc.svg`;
const imgMessages2 = `${assetPathPrefix}/fc18d.svg`;

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

type DHelpCenterProps = {
  className?: string;
  responsive?: "No";
};

function DHelpCenter({ className, responsive = "No" }: DHelpCenterProps) {
  return (
    <div className={className || "bg-[#f1f1f5] content-stretch flex h-[1220px] items-start overflow-clip relative w-[1440px]"} data-node-id="6237:53566">
      <div className="bg-[#020408] border-[#252528] border-r border-solid content-stretch flex flex-col gap-[16px] h-full items-end overflow-clip p-[16px] relative shrink-0 w-[260px]" data-node-id="6193:46726" data-name="Navigation">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6193:46726;6155:48409" data-name="Logo">
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0" data-node-id="I6193:46726;6155:48410" data-name="Company">
            <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-node-id="I6193:46726;6155:48411" data-name="logo">
              <div className="border-[0.693px] border-[rgba(255,255,255,0.15)] border-solid overflow-clip relative rounded-[5px] shadow-[0px_4.85px_6.929px_-4.158px_black,0px_0px_0px_1.386px_rgba(190,202,234,0.03)] shrink-0 size-[27.717px]" data-node-id="I6193:46726;6155:48411;20:1732" data-name="Logo">
                <div aria-hidden className="absolute bg-[#111113] inset-0 pointer-events-none rounded-[5px]" />
                <div className="absolute flex h-[44.542px] items-center justify-center left-[-7.21px] top-[-17.87px] w-[44.176px]" data-node-id="I6193:46726;6155:48411;20:1733">
                  <div className="-scale-y-100 flex-none rotate-30">
                    <div className="h-[32.972px] relative w-[31.973px]">
                      <div className="absolute inset-[-4.2%_-7.71%_-10.51%_-7.71%]">
                        <img alt="" className="block max-w-none size-full" src={imgGroup1} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.14px)] size-[20px] top-[calc(50%+0.14px)]" data-node-id="I6193:46726;6155:48411;6004:52006" data-name="user-octagon">
                  <div className="absolute contents inset-0" data-node-id="I6193:46726;6155:48411;6004:52006;3:13119" data-name="vuesax/bold/user-octagon">
                    <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6193:46726;6155:48411;6004:52006;3:13120" data-name="user-octagon">
                      <div className="absolute inset-[0_-6.38%_-84.17%_-43.33%]">
                        <img alt="" className="block max-w-none size-full" src={imgUserOctagon} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2.772px_6.929px_0px_rgba(255,255,255,0.11)]" />
              </div>
              <p className="[word-break:break-word] font-['Manrope:ExtraBold'] font-extrabold leading-[1.3] relative shrink-0 text-[16.212px] text-white tracking-[-0.6485px] whitespace-nowrap" data-node-id="I6193:46726;6155:48411;20:1850">
                Cliently
              </p>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="I6193:46726;6155:48412" data-name="arrow-down">
              <div className="absolute contents inset-0" data-node-id="I6193:46726;6155:48412;3:11318" data-name="vuesax/linear/arrow-down">
                <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:46726;6155:48412;3:11319" data-name="arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-node-id="I6193:46726;6155:48413" data-name="sidebar-left">
            <div className="absolute contents inset-0" data-node-id="I6193:46726;6155:48413;3:34669" data-name="vuesax/linear/sidebar-left">
              <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6193:46726;6155:48413;3:34670" data-name="sidebar-left">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLeft} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#252528] border border-[#44444a] border-solid content-stretch flex gap-[8px] items-center pl-[10px] pr-[12px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6193:46726;6155:48414" data-name="Profile">
          <AvatarMan1 className="relative shrink-0 size-[32px]" />
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px not-italic relative text-[12px] whitespace-nowrap" data-node-id="I6193:46726;6155:48416" data-name="Name">
            <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center overflow-hidden relative shrink-0 text-ellipsis text-white tracking-[-0.24px]" data-node-id="I6193:46726;6155:48417">
              <p className="leading-[normal] overflow-hidden text-ellipsis">John Cornor</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full overflow-hidden relative shrink-0 text-[#bebec8] text-ellipsis tracking-[-0.12px] w-[min-content]" data-node-id="I6193:46726;6155:48418">
              <p className="leading-[normal] overflow-hidden text-ellipsis">Johncornor@mail.com</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="I6193:46726;6155:48419" data-name="arrow-down">
            <div className="absolute contents inset-0" data-node-id="I6193:46726;6155:48419;3:11318" data-name="vuesax/linear/arrow-down">
              <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:46726;6155:48419;3:11319" data-name="arrow-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px relative w-full" data-node-id="I6193:46726;6155:48420" data-name="Menu">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I6193:46726;6155:48421" data-name="Main Menu">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6193:46726;6155:48422">
              <p className="leading-[normal]">Main Menu</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6193:46726;6155:48423" data-name="Main Menu">
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6193:46726;6155:48424" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6193:46726;6155:48424;6155:47823" data-name="category-2">
                  <div className="absolute contents inset-0" data-node-id="I6193:46726;6155:48424;6155:47823;3:33781" data-name="vuesax/linear/category-2">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6193:46726;6155:48424;6155:47823;3:33782" data-name="category-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory2} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:46726;6155:48424;6155:47824">
                  <p className="leading-[1.5]">Dashboard</p>
                </div>
              </div>
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notifications" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Emails" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notes" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Tasks" />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-node-id="I6193:46726;6155:48429" data-name="Favorite">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-node-id="I6193:46726;6155:48430">
              <div className="relative shrink-0 size-[14px]" data-node-id="I6193:46726;6155:48431" data-name="arrow-down">
                <div className="absolute contents inset-0" data-node-id="I6193:46726;6155:48431;3:11318" data-name="vuesax/linear/arrow-down">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:46726;6155:48431;3:11319" data-name="arrow-down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#5b5a64] text-[12px] tracking-[-0.24px]" data-node-id="I6193:46726;6155:48432">
                <p className="leading-[normal]">Favorites</p>
              </div>
              <div className="relative shrink-0 size-[14px]" data-node-id="I6193:46726;6155:48433" data-name="add">
                <div className="absolute contents inset-0" data-node-id="I6193:46726;6155:48433;3:29466" data-name="vuesax/linear/add">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:46726;6155:48433;3:29467" data-name="add">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6193:46726;6155:48434">
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6193:46726;6155:48435" data-name="Favorite">
                <div className="bg-[#dba014] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6193:46726;6155:48436" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6193:46726;6155:48437" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6193:46726;6155:48437;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6193:46726;6155:48437;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:46726;6155:48438">
                  <p className="leading-[1.5]">Primor Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6193:46726;6155:48439" data-name="Favorite">
                <div className="bg-[#3863c6] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6193:46726;6155:48440" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6193:46726;6155:48441" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6193:46726;6155:48441;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6193:46726;6155:48441;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:46726;6155:48442">
                  <p className="leading-[1.5]">Sulivan Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6193:46726;6155:48443" data-name="Favorite">
                <div className="bg-[#392fd0] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6193:46726;6155:48444" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6193:46726;6155:48445" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6193:46726;6155:48445;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6193:46726;6155:48445;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:46726;6155:48446">
                  <p className="leading-[1.5]">Trustworth Project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6193:46726;6155:48447" data-name="Other">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6193:46726;6155:48448">
              <p className="leading-[normal]">Other</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6193:46726;6155:48449" data-name="Menu">
              <div className="bg-[#252528] content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6193:46726;6155:48450" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6193:46726;6155:48450;6155:47859" data-name="message-question">
                  <div className="absolute contents inset-0" data-node-id="I6193:46726;6155:48450;6155:47859;3:27563" data-name="vuesax/linear/message-question">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearMessageQuestion} />
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:46726;6155:48450;6155:47860">
                  <p className="leading-[1.5]">{`Help & Center`}</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6193:46726;6155:48451" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6193:46726;6155:48451;6155:47841" data-name="setting">
                  <div className="absolute contents inset-0" data-node-id="I6193:46726;6155:48451;6155:47841;3:33830" data-name="vuesax/linear/setting">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6193:46726;6155:48451;6155:47841;3:33831" data-name="setting">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSetting} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:46726;6155:48451;6155:47842">
                  <p className="leading-[1.5]">Settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0 w-[1180px]" data-node-id="6193:46727" data-name="Main">
        <div className="bg-[#161618] border-[#252528] border-b border-solid content-stretch flex h-[58px] items-center justify-between overflow-clip px-[24px] py-[13px] relative shrink-0 w-full" data-node-id="6193:46728" data-name="Header">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap" data-node-id="6193:46729">
            <p className="leading-[1.5]">{`Help & Center`}</p>
          </div>
        </div>
        <div className="bg-[#161618] content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-h-px px-[80px] py-[40px] relative w-full" data-node-id="6193:46730" data-name="Main Help">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center leading-[1.5] not-italic relative shrink-0 whitespace-nowrap" data-node-id="6193:46731" data-name="Headline">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[36px] text-white tracking-[-1.08px]" data-node-id="6193:46732">
              How can we help you succeed?
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px]" data-node-id="6193:46733">
              Find answers, get step-by-step guides, or contact our support team.
            </p>
          </div>
          <div className="content-stretch flex flex-col items-start relative rounded-[10px] shrink-0 w-[516px]" data-node-id="6193:46734" data-name="Field">
            <div className="border border-[#5b5a64] border-solid content-stretch flex gap-[10px] h-[48px] items-center pl-[20px] pr-[16px] py-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6193:46734;6148:37353" data-name="Input Area">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bebec8] text-[14px] text-ellipsis tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:46734;6148:37354">
                <p className="leading-[1.5] overflow-hidden text-ellipsis">Type your question or keyword…</p>
              </div>
              <div className="relative shrink-0 size-[16px]" data-node-id="I6193:46734;6148:37355" data-name="eye-off">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearchNormal} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="6193:46735" data-name="Popular Help Topics">
            <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold'] font-semibold items-center justify-between leading-[1.5] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6193:46736" data-name="Head">
              <p className="relative shrink-0 text-[16px] text-white tracking-[-0.32px]" data-node-id="6193:46737">{` Popular Help Topics`}</p>
              <p className="relative shrink-0 text-[#4d81e7] text-[14px] tracking-[-0.28px]" data-node-id="6193:46738">
                See more
              </p>
            </div>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="6193:46739" data-name="Cards">
              <div className="bg-[#252528] border border-[#44444a] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[24px] relative rounded-[10px]" data-node-id="6193:46740" data-name="Topics Card">
                <div className="bg-[#ffe176] content-stretch flex items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shrink-0 size-[38px]" data-node-id="6193:46741" data-name="Icon">
                  <div className="relative shrink-0 size-[18px]" data-node-id="6193:46742" data-name="star">
                    <div className="absolute contents inset-0" data-node-id="I6193:46742;3:26867" data-name="vuesax/linear/star">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearStar} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="6193:46743" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[18px] text-white tracking-[-0.36px] w-full" data-node-id="6193:46744">
                    Getting Started
                  </p>
                  <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] w-full" data-node-id="6193:46745">
                    Set up your workspace, import contacts, and configure your first pipeline.
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#4d81e7] text-[14px] tracking-[-0.28px] w-[min-content]" data-node-id="6193:46746">
                  Read Guide →
                </p>
              </div>
              <div className="bg-[#252528] border border-[#44444a] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[24px] relative rounded-[10px]" data-node-id="6193:46747" data-name="Topics Card">
                <div className="bg-[#958cfb] content-stretch flex items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shrink-0 size-[38px]" data-node-id="6193:46748" data-name="Icon">
                  <div className="relative shrink-0 size-[18px]" data-node-id="6193:46749" data-name="edit">
                    <div className="absolute contents inset-0" data-node-id="I6193:46749;3:37131" data-name="vuesax/linear/edit">
                      <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-node-id="I6193:46749;3:37132" data-name="edit">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEdit} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="6193:46750" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[18px] text-white tracking-[-0.36px] w-full" data-node-id="6193:46751">
                    Customize CRM
                  </p>
                  <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] w-full" data-node-id="6193:46752">
                    Learn how to edit fields, create custom views, and manage pipelines.
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#4d81e7] text-[14px] tracking-[-0.28px] w-[min-content]" data-node-id="6193:46753">
                  Customize Setup →
                </p>
              </div>
              <div className="bg-[#252528] border border-[#44444a] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[24px] relative rounded-[10px]" data-node-id="6193:46754" data-name="Topics Card">
                <div className="bg-[#bced7b] content-stretch flex items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shrink-0 size-[38px]" data-node-id="6193:46755" data-name="Icon">
                  <div className="relative shrink-0 size-[18px]" data-node-id="6193:46756" data-name="wallet-money">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWalletMoney} />
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="6193:46757" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[18px] text-white tracking-[-0.36px] w-full" data-node-id="6193:46758">{`Billing & Subscription`}</p>
                  <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] w-full" data-node-id="6193:46759">
                    Manage your plan, update payment methods, or view invoices.
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#4d81e7] text-[14px] tracking-[-0.28px] w-[min-content]" data-node-id="6193:46760">
                  Go to Billing Help →
                </p>
              </div>
              <div className="bg-[#252528] border border-[#44444a] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[24px] relative rounded-[10px]" data-node-id="6193:46761" data-name="Topics Card">
                <div className="bg-[#94bdf7] content-stretch flex items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shrink-0 size-[38px]" data-node-id="6193:46762" data-name="Icon">
                  <div className="relative shrink-0 size-[18px]" data-node-id="6193:46763" data-name="category-2">
                    <div className="absolute contents inset-0" data-node-id="I6193:46763;3:33781" data-name="vuesax/linear/category-2">
                      <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-node-id="I6193:46763;3:33782" data-name="category-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory3} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="6193:46764" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[18px] text-white tracking-[-0.36px] w-full" data-node-id="6193:46765">
                    Integrations
                  </p>
                  <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] w-full" data-node-id="6193:46766">
                    Connect with Google Calendar, Slack, Zoom, and more.
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#4d81e7] text-[14px] tracking-[-0.28px] w-[min-content]" data-node-id="6193:46767">
                  View Integrations →
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="6193:46768" data-name="Help & Center">
            <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold'] font-semibold items-center justify-between leading-[1.5] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6193:46769" data-name="Head">
              <p className="relative shrink-0 text-[16px] text-white tracking-[-0.32px]" data-node-id="6193:46770">
                Frequently Asked Question
              </p>
              <p className="relative shrink-0 text-[#4d81e7] text-[14px] tracking-[-0.28px]" data-node-id="6193:46771">
                See more
              </p>
            </div>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="6193:46772" data-name="FAQs">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[502px]" data-node-id="6193:46773" data-name="FAQs">
                <div className="bg-[#252528] border border-[#bebec8] border-solid content-stretch flex flex-col gap-[16px] items-start justify-center overflow-clip p-[24px] relative rounded-[10px] shrink-0 w-full" data-node-id="6193:46774" data-name="FAQ">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="6193:46775">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap" data-node-id="6193:46776">
                      How do I set up my CRM workspace?
                    </p>
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:46777" data-name="minus">
                      <div className="absolute contents inset-0" data-node-id="I6193:46777;3:29504" data-name="vuesax/linear/minus">
                        <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-node-id="I6193:46777;3:29505" data-name="minus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMinus} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] w-full" data-node-id="6193:46778">
                    After signing up, you’ll be guided through a quick setup wizard to create pipelines, import contacts, and invite team members.
                  </p>
                </div>
                <div className="bg-[#252528] border border-[#5b5a64] border-solid content-stretch flex items-center overflow-clip p-[24px] relative rounded-[10px] shrink-0 w-full" data-node-id="6193:46779" data-name="FAQ">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="6193:46780">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap" data-node-id="6193:46781">
                      How do I change my plan or upgrade?
                    </p>
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:46782" data-name="add">
                      <div className="absolute contents inset-0" data-node-id="I6193:46782;3:29466" data-name="vuesax/linear/add">
                        <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-node-id="I6193:46782;3:29467" data-name="add">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#252528] border border-[#5b5a64] border-solid content-stretch flex items-center overflow-clip p-[24px] relative rounded-[10px] shrink-0 w-full" data-node-id="6193:46783" data-name="FAQ">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="6193:46784">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap" data-node-id="6193:46785">
                      Where can I download my invoices?
                    </p>
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:46786" data-name="add">
                      <div className="absolute contents inset-0" data-node-id="I6193:46786;3:29466" data-name="vuesax/linear/add">
                        <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-node-id="I6193:46786;3:29467" data-name="add">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#252528] border border-[#5b5a64] border-solid content-stretch flex items-center overflow-clip p-[24px] relative rounded-[10px] shrink-0 w-full" data-node-id="6193:46787" data-name="FAQ">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="6193:46788">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap" data-node-id="6193:46789">
                      How do I set up an automation?
                    </p>
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:46790" data-name="add">
                      <div className="absolute contents inset-0" data-node-id="I6193:46790;3:29466" data-name="vuesax/linear/add">
                        <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-node-id="I6193:46790;3:29467" data-name="add">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-w-px relative" data-node-id="6193:46791" data-name="FAQs">
                <div className="bg-[#252528] border border-[#5b5a64] border-solid content-stretch flex items-center overflow-clip p-[24px] relative rounded-[10px] shrink-0 w-full" data-node-id="6193:46792" data-name="FAQ">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="6193:46793">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap" data-node-id="6193:46794">
                      Can I get a refund if I cancel early?
                    </p>
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:46795" data-name="add">
                      <div className="absolute contents inset-0" data-node-id="I6193:46795;3:29466" data-name="vuesax/linear/add">
                        <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-node-id="I6193:46795;3:29467" data-name="add">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#252528] border border-[#5b5a64] border-solid content-stretch flex items-center overflow-clip p-[24px] relative rounded-[10px] shrink-0 w-full" data-node-id="6193:46796" data-name="FAQ">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="6193:46797">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap" data-node-id="6193:46798">
                      Can I import data from another CRM?
                    </p>
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:46799" data-name="add">
                      <div className="absolute contents inset-0" data-node-id="I6193:46799;3:29466" data-name="vuesax/linear/add">
                        <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-node-id="I6193:46799;3:29467" data-name="add">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#252528] border border-[#5b5a64] border-solid content-stretch flex items-center overflow-clip p-[24px] relative rounded-[10px] shrink-0 w-full" data-node-id="6193:46800" data-name="FAQ">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="6193:46801">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap" data-node-id="6193:46802">
                      Is there a mobile version of the CRM?
                    </p>
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:46803" data-name="add">
                      <div className="absolute contents inset-0" data-node-id="I6193:46803;3:29466" data-name="vuesax/linear/add">
                        <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-node-id="I6193:46803;3:29467" data-name="add">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#252528] border border-[#5b5a64] border-solid content-stretch flex items-center overflow-clip p-[24px] relative rounded-[10px] shrink-0 w-full" data-node-id="6193:46804" data-name="FAQ">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="6193:46805">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap" data-node-id="6193:46806">
                      What happens if I delete a contact or deal?
                    </p>
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:46807" data-name="add">
                      <div className="absolute contents inset-0" data-node-id="I6193:46807;3:29466" data-name="vuesax/linear/add">
                        <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-node-id="I6193:46807;3:29467" data-name="add">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="6193:46808" data-name="Contact Support">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap" data-node-id="6193:46809">
              Contact Support
            </p>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="6193:46810" data-name="Cards">
              <div className="bg-[#252528] border border-[#44444a] border-solid content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px overflow-clip p-[24px] relative rounded-[10px]" data-node-id="6193:46811" data-name="All Card">
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-w-px not-italic relative" data-node-id="6193:46812">
                  <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] w-full" data-node-id="6193:46813">
                    Live Chat
                  </p>
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[16px] text-white tracking-[-0.32px] w-full" data-node-id="6193:46814">
                    Mon–Fri, 9:00 AM – 6:00 PM
                  </p>
                </div>
                <div className="bg-[#44444a] border border-[#5b5a64] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[38px]" data-node-id="6193:46815" data-name="Button">
                  <div className="relative shrink-0 size-[18px]" data-node-id="I6193:46815;6155:20964" data-name="plus">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessages2} />
                  </div>
                </div>
              </div>
              <div className="bg-[#252528] border border-[#44444a] border-solid content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px overflow-clip p-[24px] relative rounded-[10px]" data-node-id="6193:46816" data-name="All Card">
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-w-px not-italic relative" data-node-id="6193:46817">
                  <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] w-full" data-node-id="6193:46818">
                    Email Address
                  </p>
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[16px] text-white tracking-[-0.32px] w-full" data-node-id="6193:46819">
                    support@yourcrm.com
                  </p>
                </div>
                <div className="bg-[#44444a] border border-[#5b5a64] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[38px]" data-node-id="6193:46820" data-name="Button">
                  <div className="relative shrink-0 size-[18px]" data-node-id="I6193:46820;6155:20964" data-name="plus">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessages2} />
                  </div>
                </div>
              </div>
              <div className="bg-[#252528] border border-[#44444a] border-solid content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px overflow-clip p-[24px] relative rounded-[10px]" data-node-id="6193:46821" data-name="All Card">
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-w-px not-italic relative" data-node-id="6193:46822">
                  <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] w-full" data-node-id="6193:46823">
                    Phone Number
                  </p>
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[16px] text-white tracking-[-0.32px] w-full" data-node-id="6193:46824">
                    +1 (555) 123-4567
                  </p>
                </div>
                <div className="bg-[#44444a] border border-[#5b5a64] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[38px]" data-node-id="6193:46825" data-name="Button">
                  <div className="relative shrink-0 size-[18px]" data-node-id="I6193:46825;6155:20964" data-name="plus">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessages2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
