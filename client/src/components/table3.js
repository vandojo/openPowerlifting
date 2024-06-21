import {Header3} from "./h3";
import {Thead} from "./thead";

import {Tbody} from "./tbody";

export function Table({headertxt, colnames, data}) {
  return (
    <div className="relative h-full/2 w-full rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
      <div className="grid h-full w-full overlfow-hidden place-items-start justify-items-center p-6 py-8 sm:p-8 lg:p-12">
        <div className="w-full min-w-0">
          <Header3
            classes={
              "text-lg/7 font-semibold text-zinc-950 sm:text-base/7 dark:text-white tracking-[-0.015em]"
            }
            txt={headertxt}
          />

          <div className="flow-root">
            <div className="mt-6 [--gutter:theme(spacing.6)] sm:[--gutter:theme(spacing.8)] lg:[--gutter:theme(spacing.12)] -mx-[--gutter] overflow-x-auto whitespace-nowrap">
              <div className="inline-block min-w-full align-middle sm:px-[--gutter]">
                <table className="min-w-full text-left text-sm/6">
                  <Thead
                    theadcls={"text-zinc-500 dark:text-zinc-400"}
                    colcls={
                      "border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] dark:border-b-white/10 sm:first:pl-2 sm:last:pr-2"
                    }
                    colnames={colnames}
                  />
                  <Tbody
                    data={data}
                    tdcls={
                      "text-white relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-2 sm:last:pr-2"
                    }
                  />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
